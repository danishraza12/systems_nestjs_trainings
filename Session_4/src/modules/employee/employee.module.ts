import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModuleBasedMiddleware } from 'src/middlewares/module-based.middleware';
import { ModuleBasedInterceptor } from 'src/interceptors/module-based.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ModuleBasedInterceptor,
    },
  ],
  exports: [EmployeeService],
})
export class EmployeeModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBasedMiddleware).forRoutes('employee/*');
  }
}
