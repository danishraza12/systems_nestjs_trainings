import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './modules/employee/entities/employee.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'secret1122',
      database: 'postgres',
      entities: [Employee],
    }),
    EmployeeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
