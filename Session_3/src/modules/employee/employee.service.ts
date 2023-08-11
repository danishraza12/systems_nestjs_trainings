import { Injectable } from '@nestjs/common';
import { Employees } from './employee.constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  getEmployees(): any {
    return this.employeeRepo.find();
  }

  getEmployeeById(employeeId: string): any {
    return this.employeeRepo.findOneBy({ id: parseInt(employeeId) });
  }

  addEmployee(employee: any): any {
    return this.employeeRepo.save(employee);
  }
}
