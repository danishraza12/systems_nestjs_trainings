import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class UserService {
  private readonly logger = new CustomLogger(UserService.name);

  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getUserById(userId: string): any {
    this.logger.log('Get one user');
    return this.userRepo.findOneBy({ userId: userId });
  }

  addUser(user: any): any {
    this.logger.log('Insert user');

    return this.userRepo.save(user);
  }
}
