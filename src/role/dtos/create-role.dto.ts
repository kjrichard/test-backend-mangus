import { IsNotEmpty, IsString, Length } from "class-validator";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CreateRoleDto {
    
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    description : string;
    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}