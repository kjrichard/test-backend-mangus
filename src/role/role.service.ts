import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dtos';
import { Role } from '../user/entities/role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ) {}
   async getOne(id: number): Promise<Role> {
    const role = await this.roleRepository.findOne( {id, status:true}, { relations: ['user', 'user.role']})
        return role;   
   }
  
   async getMany(): Promise<Role[]> {
        const roles = await this.roleRepository.find({ relations: ['user', 'user.role']})
        return roles;
    }

    async createOne( dto: CreateRoleDto ): Promise<Role> {
       const data =  await this.roleRepository.create( dto );
       return await this.roleRepository.save( data );
    }

    async deleteOne( id: number ): Promise<Role> {
        const DeleteRole = await this.getOne( id );
        DeleteRole.status = false;
        const deleted = Object.assign(DeleteRole);
        return await this.roleRepository.save( deleted );
    }

    async updateRole(id: number, dto: CreateRoleDto ): Promise<Role> {
        const role = await this.getOne( id);
        if(!role)  throw new NotFoundException( 'El rol no existe' );
        const updateRole = Object.assign(role, dto);
        return await this.roleRepository.save( updateRole );
    }

}
