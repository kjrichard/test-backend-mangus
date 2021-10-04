import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/user/entities/employee.entity';
import { User } from 'src/user/entities/user.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
