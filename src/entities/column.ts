import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { User } from './user';
import { Card } from './card';

@Entity()
export class UserColumn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true }) // column titles should be unique
    title: string;

    @Column()
    positionInBoard: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date | null;

    @ManyToOne(() => User, (user) => user.columns) // particular columns belongs only to one user
    user: User;

    @OneToMany(() => Card, (card) => card.userColumn) // column can have many cards
    cards: Card[];
}
