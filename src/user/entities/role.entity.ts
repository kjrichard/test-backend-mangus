
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

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}