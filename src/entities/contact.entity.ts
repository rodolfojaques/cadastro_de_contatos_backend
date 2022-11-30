import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm"
import { Client } from "./client.entity";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    telephone: string;
    
    @ManyToOne(type => Client, client => client.id, {eager:false})
    client: Client
}