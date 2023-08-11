import { Injectable } from '@nestjs/common';
import { Employees } from './employee.constants';

@Injectable()
export class EmployeeService {
  getEmployees(): any {
    return Employees;
  }

  getEmployeeById(employeeId: string): any {
    return Employees.find((employee) => employee.id === parseInt(employeeId));
  }
}
