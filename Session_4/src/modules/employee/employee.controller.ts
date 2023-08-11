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
import { EmployeeService } from './employee.service';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';
import { ExectionFilters } from 'src/filters/exception.filter';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CustomLogger } from 'src/common/customer.logger';

@Controller('employee')
export class EmployeeController {
  readonly logger = new CustomLogger(Controller.name);
  constructor(readonly employeeService: EmployeeService) {}

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get()
  getEmployees(): any {
    this.logger.log(`${this.getEmployees.name} invoked`);

    try {
      return this.employeeService.getEmployees();
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Get(':employeeId')
  getEmployeeById(@Param('employeeId', ParseIntPipe) employeeId: number): any {
    this.logger.log(`${this.getEmployeeById.name} invoked`);

    try {
      return this.employeeService.getEmployeeById(employeeId);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }

  @UseFilters(ExectionFilters)
  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(JwtAuthGuard)
  @Post()
  addEmployee(@Body() employee: any): any {
    this.logger.log(`${this.addEmployee.name} invoked`);

    try {
      return this.employeeService.addEmployee(employee);
    } catch (error) {
      throw new UnauthorizedException('Something went wrong');
    }
  }
}
