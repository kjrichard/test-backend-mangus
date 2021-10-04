import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

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
    roleId: number;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}