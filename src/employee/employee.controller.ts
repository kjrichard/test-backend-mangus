import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateEmployeeDto } from './dtos';
import { EditEmployeeDto } from './dtos/edit-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(  private readonly employeeService: EmployeeService ) {}
    
    @Get(':id')
    async getOne( @Param( 'id', ParseIntPipe ) id: number ) {
        const data = await this.employeeService.getOne( id );
        if(!data)  throw new NotFoundException( 'El usuario no existe' );
        return {  data }
    }

    @Get()
    async getMany( ) {
        const data = await this.employeeService.getMany();
        if( !data )  throw new NotFoundException( 'No hay registros' );
        return {  data }
    }

    @Post()
    async createOne( @Body() dto: CreateEmployeeDto ) {
        const data = await this.employeeService.createOne(dto);
        return { data }
    }

    @Put( ':id' )
    async updateOne( @Param( 'id' ) id: number, @Body() dto: EditEmployeeDto ) {
        let data = await this.employeeService.updateEmployee(id, dto);
        return { data }
    }

    @Put( 'delete/:id' )
    async deleteOne( @Param( 'id' ) id: number ) {
        let data = await this.employeeService.deleteEmployee(id);
        return { data }
    } 
}

