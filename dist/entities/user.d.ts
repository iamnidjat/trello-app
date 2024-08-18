import { UserColumn } from './column';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    columns: UserColumn[];
}
