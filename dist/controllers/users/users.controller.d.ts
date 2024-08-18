import { User } from '../../entities/user';
import { UsersService } from 'src/services/user-service/user-service.service';
import { UserDto } from 'src/dtos/userDto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUserAsync(userId: number): Promise<User>;
    getAllUsersAsync(): Promise<User[]>;
    deleteUserAsync(userId: number): Promise<void>;
    updateUserAsync(userId: number, body: UserDto): Promise<User>;
}
