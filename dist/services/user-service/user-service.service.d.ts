import { Repository } from 'typeorm';
import { User } from '../../entities/user';
import { UserDto } from 'src/dtos/userDto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUserAsync(userDto: UserDto): Promise<User>;
    findByUsernameAsync(username: string): Promise<User | undefined>;
    getUserAsync(id: number): Promise<User | undefined>;
    getAllUsersAsync(): Promise<User[]>;
    deleteUserAsync(id: number): Promise<void>;
    updateUserAsync(id: number, userDto: UserDto): Promise<User>;
}
