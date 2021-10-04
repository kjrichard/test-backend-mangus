import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { json } from 'stream/consumers';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ) {}

    async getMany(): Promise<User> {
        const user = await this.userRepository.find( );
        console.log(user);
        
        return ;
           
    }
        async createOne( dto: CreateUserDto ): Promise<User> {
           const data =  await this.userRepository.create( dto );
           return await this.userRepository.save( data );
        }
    /* 
        async deleteRole( id: number): Promise<Role> {
            const deleteRole = await this.getOne( id );
            if(!deleteRole)  throw new NotFoundException( 'El rol no existe' );
            return await this.roleRepository.remove(deleteRole);
        }
    
        async updateRole(id: number, dto: CreateRoleDto ): Promise<Role> {
            const role = await this.getOne( id);
            if(!role)  throw new NotFoundException( 'El rol no existe' );
            const updateRole = Object.assign(role, dto);
            return await this.roleRepository.save( updateRole );
        } */
}
