import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ type: 'varchar', length: 20, nullable: false, select: false })
    pass: string;
    
    @ManyToOne(() => User, user => user.employees)
    user: User; 

}