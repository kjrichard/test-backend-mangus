import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dtos';
import { EditClientDto } from './dtos/edit-client.dto';

@Controller('client')
export class ClientController {
    constructor(  private readonly clientService: ClientService ) {}
    
    @Get(':id')
    async getOne( @Param( 'id', ParseIntPipe ) id: number ) {
        const data = await this.clientService.getOne( id );
        if(!data)  throw new NotFoundException( 'El usuario no existe' );
        return {  data }
    }
    
    @Post()
    async createOne( @Body() dto: CreateClientDto ) {
        const data = await this.clientService.createOne(dto);
        return { data }
    }

    @Put( ':id' )
    async updateOne( @Param( 'id' ) id: number, @Body() dto: EditClientDto ) {
        let data = await this.clientService.updateEmployee(id, dto);
        return { data }
    }

    @Put( 'delete/:id' )
    async deleteOne( @Param( 'id' ) id: number, @Body() status ) {
        let data = await this.clientService.deleteEmployee(id);
        return { data }
    } 
}
