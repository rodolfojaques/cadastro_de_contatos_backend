import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
} from "typeorm"
import { Contact } from "./contact.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(type => Contact, contact => contact.client, {eager:true})
    contacts?: Contact[]
}