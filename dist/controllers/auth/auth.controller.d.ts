import { AuthService } from 'src/services/auth/auth.service';
import { Request, Response } from 'express';
import { LoginDto } from 'src/dtos/loginDto';
import { SignUpDto } from 'src/dtos/signUpDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginAsync(body: LoginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    singUpAsync(body: SignUpDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logOut(req: Request, res: Response): Promise<void>;
}
