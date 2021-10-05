import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from 'src/client/dtos';
import { Client } from 'src/user/entities/client.entity';
import { Employee } from 'src/user/entities/employee.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dtos';
import { EditEmployeeDto } from './dtos/edit-employee.dto';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async getOne(id: number): Promise<Employee> {
        const employee = await this.employeeRepository.findOne({id, status:true}, { relations: ['user']})
        return employee;   
           
    }

    async createOne( dto: CreateEmployeeDto ){
        const userExist = await this.userRepository.findOne({ id: dto.user });
        if (!userExist) throw new BadRequestException('El usuario no existe en el sistema');
        const newUser = this.employeeRepository.create(dto);
        const user = await this.employeeRepository.save(newUser); 
        return {
            user
        }
    }
    
    
    async deleteEmployee( id: number ): Promise<User> {
        const deleteUser = await this.getOne( id );
        deleteUser.status = false;
        const deleted = Object.assign(deleteUser);
        return await this.employeeRepository.save( deleted );
    }
    
    async updateEmployee(id: number, dto: EditEmployeeDto ): Promise<Employee> {
        const user = await this.getOne( id);
        if(!user)  throw new NotFoundException( 'El usuario no existe' );
        const updateUser = Object.assign(user, dto);
        return await this.employeeRepository.save( updateUser );
    }  

}
