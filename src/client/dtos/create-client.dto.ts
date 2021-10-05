import { IsNotEmpty, IsString, Length } from "class-validator";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CreateClientDto {
    
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    name : string;

    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    lastname : string;

    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    address : string;

    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    phone : string;


    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
}