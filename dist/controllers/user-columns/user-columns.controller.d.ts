import { UserColumnDto } from 'src/dtos/columnDto';
import { UserColumn } from 'src/entities/column';
import { UserColumnsService } from 'src/services/user-columns/user-columns.service';
export declare class UserColumnsController {
    private userColumnService;
    constructor(userColumnService: UserColumnsService);
    createUserColumnAsync(userId: number, userColumnDto: UserColumnDto): Promise<UserColumn>;
    getAllUserColumnsAsync(userId: number): Promise<UserColumn[]>;
    getUserColumnAsync(userId: number, columnId: number): Promise<UserColumn>;
    deleteUserColumnAsync(userId: number, columnId: number): Promise<void>;
    updateUserColumnAsync(userId: number, columnId: number, body: UserColumnDto): Promise<UserColumn>;
}
