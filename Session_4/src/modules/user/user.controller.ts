import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnauthorizedException,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { ExectionFilters } from 'src/filters/exception.filter';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CustomLogger } from 'src/common/customer.logger';
@Controller('user')
export class UserController {
  readonly logger = new CustomLogger(Controller.name);
  constructor(readonly employeeService: UserService) {}

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  getUserById(@Param('userId') userId: string): any {
    this.logger.log(`${this.getUserById.name} invoked`);

    try {
      return this.employeeService.getUserById(userId);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  addUser(@Body() user: any): any {
    this.logger.log(`${this.addUser.name} invoked`);

    try {
      const addedUser = this.employeeService.addUser(user);
      console.log(addedUser);
      return addedUser;
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }
}
