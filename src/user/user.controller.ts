import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { EditUserDto } from './dtos';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(  private readonly userService: UserService ) {}
    @Get()
    async getMany( ) {
        const data = await this.userService.getMany();
        if( !data )  throw new NotFoundException( 'No hay registros' );
        return {  data }
    }

    @Post()
    async createOne( @Body() dto: CreateUserDto ) {
        const data = await this.userService.createOne(dto);
        return { data }
    }

    @Put( ':id' )
    async updateOne( @Param( 'id' ) id: number, @Body() dto: EditUserDto ) {
        let data = await this.userService.updateUser(id, dto);
        return { data }
    }

    @Put( 'delete/:id' )
    async deleteOne( @Param( 'id' ) id: number, @Body() status ) {
        let data = await this.userService.deleteUser(id);
        return { data }
    }
}

