import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { json } from 'stream/consumers';
import { CreateRoleDto } from "./dtos";
import { EditRoleDto } from './dtos/edit-role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(  private readonly roleService: RoleService ) {}

    @Get()
    async getMany( ) {
        const data = await this.roleService.getMany();
        if( !data )  throw new NotFoundException( 'No hay registros' );
        return {  data }
    }

    @Get( ':id' )
    async getOne( @Param( 'id', ParseIntPipe ) id: number ) {
        const data = await this.roleService.getOne( id );
        if(!data)  throw new NotFoundException( 'El usuario no existe' );
        return {  data }
    }

    @Post()
    async createOne( @Body() dto: CreateRoleDto ) {
        const data = await this.roleService.createOne( dto );
        console.log(data,'d');
        return { data }
    }

    @Put( ':id' )
    async updateOne( @Param( 'id' ) id: number, @Body() dto: CreateRoleDto ) {
        let data = await this.roleService.updateRole(id, dto);
        return { data }
    }

    @Delete( ':id' )
    async deleteOne( @Param( 'id' ) id: number ) {
        let data;
        data = await this.roleService.deleteRole(id);
        return { data }
    } 
}
