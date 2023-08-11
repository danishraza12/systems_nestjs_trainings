import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModuleBasedMiddleware } from 'src/middlewares/module-based.middleware';
import { ModuleBasedInterceptor } from 'src/interceptors/module-based.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [
    UserController,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ModuleBasedInterceptor,
    // },
  ],
  exports: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBasedMiddleware).forRoutes('user/*');
  }
}
