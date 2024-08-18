import { UserColumn } from './column';
import { Comment } from './comment';
export declare class Card {
    id: number;
    title: string;
    description: string | null;
    positionInColumn: number;
    deadline: Date;
    createdAt: Date;
    updatedAt: Date | null;
    userColumn: UserColumn;
    comments: Comment[];
}
