import { Body, Controller, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { Request, Response } from 'express';
import { LoginDto } from 'src/dtos/loginDto';
import { SignUpDto } from 'src/dtos/signUpDto';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('auth') // for grouping endpoints in Swagger
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'user login' })
    @ApiResponse({ status: 200, description: 'login was successful.' })
    @ApiResponse({ status: 400, description: 'invalid request body.' })
    @ApiResponse({ status: 401, description: 'invalid credentials.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    async loginAsync(@Body() body: LoginDto, @Req() req: Request, @Res() res: Response) {
        const user = await this.authService.loginAsync(body.username, body.password);

        if (user) {
            req.session.user = { id: user.id, username: user.username, email: user.email }; // save user info in session
            req.session.access_token = user.access_token; // save access token

            console.log('Congratulations! You successfully logged in!\nYou\'ll be redirected to the user board');
           
            return res.status(200).json({
                message: 'Login was successful',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
                access_token: user.access_token,
            });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    @Post('/register')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'user registration' })
    @ApiResponse({ status: 200, description: 'registration was successful.' })
    @ApiResponse({ status: 400, description: 'invalid request body.' })
    @ApiResponse({ status: 409, description: 'user already exists.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    async singUpAsync(@Body() body: SignUpDto, @Req() req: Request, @Res() res: Response) {
        const user = await this.authService.signUpAsync(body);

        if (user) {
            req.session.user = { id: user.id, username: user.username, email: user.email }; // Save user info in session
            req.session.access_token = user.access_token; // save access token
            
            console.log('Congratulations! You successfully signed up!\nYou\'ll be redirected to the user board');
            
            return res.status(200).json({
                message: 'Registration was successful',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
                access_token: user.access_token,
            });
        } else {
            return res.status(400).json({ message: 'Invalid request body' });
        }
    }

    @Post('/logout')
    @ApiOperation({ summary: 'user logout' })
    @ApiResponse({ status: 200, description: 'logout was successful.' })
    @ApiResponse({ status: 500, description: 'failed to log out.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    async logOut(@Req() req: Request, @Res() res: Response) {
        req.session.destroy(err => {
            if (err) {
                console.error('Session destruction error:', err);
                return res.status(500).send("Failed to log out!");
            }
    
            console.log("You were logged out!");
            return res.status(200).send("You were logged out!");
        });
    }
}
