import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { ClassBasedInterceptor } from 'src/interceptors/class-based.interceptor';

@Controller('employee')
export class EmployeeController {
  constructor(readonly employeeService: EmployeeService) {}

  @UseInterceptors(new ClassBasedInterceptor())
  @Get()
  getEmployees(): any {
    return this.employeeService.getEmployees();
  }

  @UseInterceptors(new ClassBasedInterceptor())
  @Get(':employeeId')
  getEmployeeById(@Param('employeeId') employeeId: string): any {
    return this.employeeService.getEmployeeById(employeeId);
  }

  @UseInterceptors(new ClassBasedInterceptor())
  @UseGuards(AuthGuard)
  @Post()
  addEmployee(@Body() employee: any): any {
    return this.employeeService.addEmployee(employee);
  }
}
