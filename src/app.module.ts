import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'J@ir0425',
      database: 'mangus',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    RoleModule,
    UserModule,
    ClientModule,
    EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
