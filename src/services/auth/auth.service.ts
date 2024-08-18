import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../user-service/user-service.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dtos/userDto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UsersService
    ) {}

    async loginAsync(username: string, password: string): Promise<any> {
        try {
            const user = await this.userService.findByUsernameAsync(username);

            if (user && (await bcrypt.compare(password, user.password))) {
                const payload = { sub: user.id, email: user.email };

                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    access_token: await this.jwtService.signAsync(payload),
                };
            }

            return null;
        } catch (error) {
            console.error('Login error:', error);
            throw new InternalServerErrorException('Failed to log in');
        }
    }
      
    async signUpAsync(payload: UserDto) {
        try {
            const user = await this.userService.createUserAsync(payload);

            const tokenPayload = { sub: user.id, email: user.email };
    
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                access_token: await this.jwtService.signAsync(tokenPayload),
            };
        } catch (error) {
            console.error('SignUp error:', error);
            throw new InternalServerErrorException('Failed to sign up');
        }
    }
}
