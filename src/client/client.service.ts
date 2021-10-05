import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/user/entities/client.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dtos';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async getMany(){
        const user = await this.clientRepository.find({
            relations: ['user', 'user.client']
        });
        return user;
           
    }

    async getOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne( {id, status:true}, { relations: ['user']})
        return user;   
           
       }
    async createOne( dto: CreateClientDto ){
        console.log(this.clientRepository);
        
        /* const userExist = await this.userRepository.findOne({ user: dto.user });
        const rolExist = await this.roleRepository.findOne({ id: dto.role });
        if ( !rolExist ) throw new BadRequestException('No es un rol valido');
        if (userExist) throw new BadRequestException('El nombre se usuario esta en uso');
        const newUser = this.userRepository.create(dto);
        const user = await this.userRepository.save(newUser); */
    }
    
    
       /*  async deleteUser( id: number ): Promise<User> {
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
        }  */
}
