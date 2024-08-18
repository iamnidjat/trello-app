import { UserColumnDto } from 'src/dtos/columnDto';
import { UserColumn } from 'src/entities/column';
import { Repository } from 'typeorm';
export declare class UserColumnsService {
    private userColumnsRepository;
    constructor(userColumnsRepository: Repository<UserColumn>);
    createUserColumnAsync(userColumnDto: UserColumnDto): Promise<UserColumn>;
    getAllUserColumnsAsync(userId: number): Promise<UserColumn[]>;
    getUserColumnAsync(id: number): Promise<UserColumn | undefined>;
    deleteUserColumnAsync(id: number): Promise<void>;
    updateUserColumnAsync(id: number, userColumnDto: UserColumnDto): Promise<UserColumn>;
}
