import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { Role } from "./role.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 15 })
    name : string;

    @Column({ type: "varchar", length: 15 })
    lastname : string;

    @Column({ type: "varchar", length: 15 })
    address : string;

    @Column({ type: "varchar", length: 15 })
    phone : string;

    @Column({ type: 'bool', default: true })
    status: boolean;
    
    @ManyToOne(() => User, user => user.clients)
    user: User;

}