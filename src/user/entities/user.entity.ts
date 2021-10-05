
import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { Role } from "./role.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Employee } from "./employee.entity";



@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 15 })
    username : string;

    @Column({ type: 'varchar', length: 128, nullable: false, select: false })
    pass: string;

    @Column({ type: 'bool', default: true })
    status: boolean;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @CreateDateColumn({ name: 'update_up' }) 'update_up': Date;

    @ManyToOne(() => Role, role => role.user)
    role: Role; 

    @OneToMany(() => Client, client => client.user)
    clients: Client[];

    @OneToMany(() => Employee, employee => employee.user)
    employees: Employee[]; 
    
}