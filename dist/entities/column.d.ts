import { User } from './user';
import { Card } from './card';
export declare class UserColumn {
    id: number;
    title: string;
    positionInBoard: number;
    createdAt: Date;
    updatedAt: Date | null;
    user: User;
    cards: Card[];
}
