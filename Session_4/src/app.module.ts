import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './modules/employee/entities/employee.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { CustomLogger } from './common/customer.logger';

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
    JwtModule.register({
      secret: 'MyJWTSecret',
      signOptions: {
        expiresIn: '1h',
      },
      global: true,
    }),
    AuthModule,
    EmployeeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
