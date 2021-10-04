
import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { Role } from "./role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";
import { Employee } from "./employee.entity";
import { hash } from "bcrypt";



@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 15 })
    username : string;

    @Column({ type: 'varchar', length: 128, nullable: false, select: false })
    pass: string;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

   

    @ManyToOne(() => Role, role => role.user)
    role: Role;

    @OneToMany(() => Client, client => client.user)
    clients: Client[];

    @OneToMany(() => Employee, employee => employee.user)
    employees: Employee[]; 
    async hashPassword() {
      if (!this.pass) {
        return;
      }
      this.pass = await hash(this.pass, 10);
    }
  

}