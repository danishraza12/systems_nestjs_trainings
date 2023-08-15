import { Injectable } from '@nestjs/common';
import { TaskDTO, TaskFilterDTO } from './entities/task.dto';
import { CustomLogger } from 'src/common/customer.logger';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  private readonly logger = new CustomLogger(TaskService.name);

  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  getTasks(): any {
    this.logger.log('Get one tasks');
    return this.taskRepo.find({});
  }

  getTaskById(taskId: string): any {
    this.logger.log('Get task by taskId');
    return this.taskRepo.findOneBy({ taskId: taskId });
  }

  async updateTask(body: TaskDTO): Promise<any> {
    this.logger.log('update task by taskId');
    const updateObj: any = {};

    body.title && (updateObj.title = body.title);
    body.description && (updateObj.description = body.description);
    body.status && (updateObj.status = body.status);
    body.dueDate && (updateObj.dueDate = body.dueDate);
    body.createdAt && (updateObj.createdAt = body.createdAt);
    body.updatedAt && (updateObj.updatedAt = body.updatedAt);

    const response = await this.taskRepo.update(body.id, updateObj);
    return response;
  }

  addTask(body: TaskDTO): any {
    this.logger.log('add task');

    return this.taskRepo.save(body);
  }

  deleteTask(taskId: string): any {
    this.logger.log('delete task');

    return this.taskRepo.delete({ taskId: taskId });
  }

  getTaskAgainstFilter(body: TaskFilterDTO): any {
    const queryObj: any = {};

    body.status && (queryObj.status = body.status);
    body.dueDate && (queryObj.dueDate = body.dueDate);
    body.startDate && (queryObj.startDate = body.startDate);
    body.endDate && (queryObj.endDate = body.endDate);

    return this.taskRepo.findOne(queryObj);
  }
}
