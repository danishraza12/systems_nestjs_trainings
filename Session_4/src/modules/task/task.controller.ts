import { Body, Controller, Get, Param, Put, Post, Delete, UseFilters, UseInterceptors, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO, TaskFilterDTO } from './entities/task.dto';
import { CustomLogger } from 'src/common/customer.logger';
import { ExectionFilters } from 'src/filters/exception.filter';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { JwtAuthGuard } from 'src/guards/auth.guard';

@Controller('task')
export class TaskController {
  readonly logger = new CustomLogger(Controller.name);
  
  constructor(readonly taskService: TaskService) {}

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks(): any {
    return this.taskService.getTasks();
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get(':taskId')
  getTaskById(@Param('taskId') taskId: string): any {
    return this.taskService.getTaskById(taskId);
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Put()
  updateTask(@Body() body: TaskDTO): any {
    return this.taskService.updateTask(body);
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  addTask(@Body() body: TaskDTO): TaskDTO {
    return this.taskService.addTask(body);
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string): any {
    return this.taskService.deleteTask(taskId);
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  getTaskAgainstFilter(@Body() body: TaskFilterDTO): TaskDTO {
    return this.taskService.getTaskAgainstFilter(body);
  }
}