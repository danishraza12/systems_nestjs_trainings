import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { Tasks } from './task.constants';
import { TaskService } from './task.service';
import { ITask } from './task.interface';

@Controller('task')
export class TaskController {
  // Injected
  constructor(readonly taskService: TaskService) {}

  @Get()
  getTasks(): any {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  getTaskById(@Param('taskId') taskId: string): any {
    return this.taskService.getTaskById(taskId);
  }

  @Put()
  updateTask(@Body() body: ITask): ITask {
    return this.taskService.updateTask(body);
  }

  @Post()
  addTask(@Body() body: ITask): ITask {
    return this.taskService.addTask(body);
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string): any {
    return this.taskService.deleteTask(taskId);
  }
}
