import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUserById', () => {
    it('should return one user against ID', async () => {
      const result = {
        userId: '89fcwa7-mq2r34-a9c6da7s-b98gf7bf',
        firstName: 'Danish',
        lastName: 'Raza',
        email: 'danish.raza@systemsltd.com',
        username: 'danishraza',
        password: 'testingpassword123',
        created_at: '01-01-2023',
        updated_at: '05-08-2023',
      };

      expect(
        await controller.getUserById('89fcwa7-mq2r34-a9c6da7s-b98gf7bf'),
      ).toBe(result);
    });
  });
});
