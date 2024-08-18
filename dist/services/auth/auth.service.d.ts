import { UsersService } from '../user-service/user-service.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dtos/userDto';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UsersService);
    loginAsync(username: string, password: string): Promise<any>;
    signUpAsync(payload: UserDto): Promise<{
        id: number;
        username: string;
        email: string;
        access_token: string;
    }>;
}
