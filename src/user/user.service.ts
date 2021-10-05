import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { json } from 'stream/consumers';
import { Repository } from 'typeorm';
import { EditUserDto } from './dtos';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ) {}

    async getMany(){
        const user = await this.userRepository.find({
            relations: ['role', 'role.user']
        });
        return user;
           
    }

    async getOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne( {id, status:true}, { relations: ['role']})
        return user;   
           
       }
    async createOne( dto: CreateUserDto ){
        const userExist = await this.userRepository.findOne({ username: dto.username });
        const rolExist = await this.roleRepository.findOne({ id: dto.role });
        if ( !rolExist ) throw new BadRequestException('No es un rol valido');
        if (userExist) throw new BadRequestException('El nombre se usuario esta en uso');
        const newUser = this.userRepository.create(dto);
        const user = await this.userRepository.save(newUser);
    }
    
    
        async deleteUser( id: number ): Promise<User> {
            const deleteUser = await this.getOne( id );
            deleteUser.status = false;
            const deleted = Object.assign(deleteUser);
            return await this.userRepository.save( deleted );
        }
    
        async updateUser(id: number, dto: EditUserDto ): Promise<User> {
            const user = await this.getOne( id);
            if(!user)  throw new NotFoundException( 'El rol no existe' );
            const updateUser = Object.assign(user, dto);
            return await this.userRepository.save( updateUser );
        } 
}
