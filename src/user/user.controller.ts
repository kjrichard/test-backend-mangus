import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(  private readonly userService: UserService ) {}
    @Get()
    async getMany( ) {
        const data = await this.userService.getMany();
        console.log(data);
        
        if( !data )  throw new NotFoundException( 'No hay registros' );
        return {  data }
    }

    @Post()
    async createOne( @Body() dto: CreateUserDto ) {
        console.log(dto);
        
        const data = await this.userService.createOne( dto );
        return { data }
    }
}
