import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class CreateUserDto {
    @IsNotEmpty()
    @Length(4, 15)
    @IsString()
    username : string;

    @IsNotEmpty()
    @Length(6, 10)
    @IsString()
    pass: string; 

    @IsNotEmpty()
    role: any;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    
}