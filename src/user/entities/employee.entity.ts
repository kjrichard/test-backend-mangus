import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 15 })
    name : string;

    @Column({ type: "varchar", length: 15 })
    lastname : string;

    @Column({ type: "varchar", length: 15 })
    address : string;

    @Column({ type: 'bool', default: true })
    status: boolean;
    
    @ManyToOne(() => User, user => user.employees)
    user: User; 

}