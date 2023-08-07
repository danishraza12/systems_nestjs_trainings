import { Injectable } from '@nestjs/common';
import { Tasks } from './task.constants';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  getTasks(): any {
    return Tasks;
  }

  getTaskById(taskId: string): ITask {
    return Tasks.find((task) => task.id === parseInt(taskId));
  }

  updateTask(body: ITask): ITask {
    const taskIndex = Tasks.findIndex((t => t.id === body.id));
    Tasks[taskIndex].description = body.description;
    return Tasks[taskIndex];
  }

  addTask(body: ITask): ITask {
    Tasks.push(body);
    return body;
  }

  deleteTask(taskId: string): any {
    const taskIndex = Tasks.findIndex((t => t.id === parseInt(taskId)));
    let removedTask = {};
    if (taskIndex > -1) {
      removedTask = Tasks[taskIndex];
      Tasks.splice(taskIndex, 1);
    }
    
    console.log(removedTask); 

    return removedTask;
  }
}
