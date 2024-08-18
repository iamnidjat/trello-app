import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Card } from './card';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date | null;

    @ManyToOne(() => Card, (card) => card.comments) // particular comment belongs only to one card
    card: Card;
}