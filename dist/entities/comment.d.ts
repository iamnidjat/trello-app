import { Card } from './card';
export declare class Comment {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    card: Card;
}
