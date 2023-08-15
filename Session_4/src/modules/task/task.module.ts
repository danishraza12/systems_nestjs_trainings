import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ModuleBasedMiddleware } from 'src/middlewares/module-based.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBasedMiddleware).forRoutes('task/*');
  }
}