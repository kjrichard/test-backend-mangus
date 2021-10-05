import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/user/entities/client.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dtos';
import { EditClientDto } from './dtos/edit-client.dto';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async getOne(id: number): Promise<Client> {
        const client = await this.clientRepository.findOne({id, status:true}, { relations: ['user']})
        return client;   
           
    }

    async createOne( dto: CreateClientDto ){
        const userExist = await this.userRepository.findOne({ id: dto.user});
        if (!userExist) throw new BadRequestException('El no existe en el sistema');
        const newUser = this.clientRepository.create(dto);
        const user = await this.clientRepository.save(newUser); 
        return {
            user
        }
    }
    
    async deleteEmployee( id: number ): Promise<Client> {
        const deleteUser = await this.getOne( id );
        deleteUser.status = false;
        const deleted = Object.assign(deleteUser);
        return await this.clientRepository.save( deleted );
    }
    
    async updateEmployee(id: number, dto: EditClientDto ): Promise<Client> {
        const user = await this.getOne( id);
        if(!user)  throw new NotFoundException( 'El usuario no existe' );
        const updateUser = Object.assign(user, dto);
        return await this.clientRepository.save( updateUser );
    }  

}
