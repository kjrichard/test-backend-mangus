
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 15})
    description: String;

    @Column({ type: 'bool', default: true })
    status: boolean;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @CreateDateColumn({ name: 'update_up' }) 'update_up': Date;

    @OneToMany(() => User, user => user.role)
    user: User[];
  
}