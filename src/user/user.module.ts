import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Employee } from './entities/employee.entity';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Client, Employee])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

