import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
import { PassThrough } from "stream";
import { Fermentor } from "./Fermentor.entity";
import bcrypt from "bcrypt-nodejs";

@Entity()
export class User {

    comparePassword(candidatePassword: string, cb: any) {
        bcrypt.compare(candidatePassword, this.pass, (err: any, isMatch: boolean) => {
            cb(err, isMatch);
        });
    }

    // Unique identifier auto generated by the DB
    @PrimaryGeneratedColumn()
    public id: number;

    // User's Firstname
    @Column()
    public firstName: string;

    // User's last name
    @Column()
    public lastName: string;

    // User's Date of Birth
    @Column()
    public dateOfBirth: string;

    // User's password
    @Column({ nullable: true })
    public pass: string;

    // User's email
    @Column({ nullable: true })
    public email: string;

    // User's fermentors
    @OneToMany(type => Fermentor, fermentor => fermentor.owner, { nullable: true })
    public fermentors: Fermentor[];

    @Column({ nullable: true })
    public token: string;
}
