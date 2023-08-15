import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';

describe('UserController', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTasks', () => {
    it('should return an array of tasks', async () => {
      const result = [
        {
          taskId: '4k3j3k-a9sd8ad-w7e4er3-1c9s8cd9',
          title: 'Task 1',
          description: 'This is a testing task',
          status: 'completed',
          dueDate: '10-10-2023',
          created_at: '02-08-2023',
          updated_at: '07-08-2023',
        },
      ];

      expect(await controller.getTasks()).toBe(result);
    });
  });
});
