
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

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @CreateDateColumn({ name: 'update_up' }) 'update_up': Date;
    
    @ManyToOne(() => User, user => user.clients)
    user: User;

}