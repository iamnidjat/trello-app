import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import { UserColumn } from './column';
import { Comment } from './comment';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true }) // card names should be unique
    title: string;

    @Column()
    description: string | null;

    @Column()
    positionInColumn: number;

    @Column()
    deadline: Date;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date | null;;

    @ManyToOne(() => UserColumn, (userColumn) => userColumn.cards) // particular card belongs only to one column
    userColumn: UserColumn;

    @OneToMany(() => Comment, (comment) => comment.card) // card can have many comments
    comments: Comment[];
}