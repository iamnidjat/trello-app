import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserColumn } from './column';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true }) // usernames should be unique
    username: string;
  
    @Column({ unique: true }) // mails should be unique
    email: string;
  
    @Column()
    password: string;

    @OneToMany(() => UserColumn, (column) => column.user) // user can have many columns
    columns: UserColumn[];
}
