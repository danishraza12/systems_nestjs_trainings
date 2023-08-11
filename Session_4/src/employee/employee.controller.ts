import { Controller, Get, Param } from '@nestjs/common';
import { Employees } from './employee.constants';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  // Injected
  constructor(readonly employeeService: EmployeeService) {}

  @Get()
  getEmployees(): any {
    return this.employeeService.getEmployees();
  }

  @Get(':employeeId')
  getEmployeeById(@Param('employeeId') employeeId: string): any {
    return this.employeeService.getEmployeeById(employeeId);
  }
}
