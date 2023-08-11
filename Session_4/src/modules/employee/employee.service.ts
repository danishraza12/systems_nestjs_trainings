import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CustomLogger } from 'src/common/customer.logger';

@Injectable()
export class EmployeeService {
  private readonly logger = new CustomLogger(EmployeeService.name);

  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  async getEmployees(): Promise<any> {
    this.logger.log('Get all employees');
    return { employee: await this.employeeRepo.find() };
  }

  getEmployeeById(employeeId: number): any {
    this.logger.log('Get one employee');
    return this.employeeRepo.findOneBy({ id: employeeId });
  }

  addEmployee(employee: any): any {
    this.logger.log('Insert employee');
    return this.employeeRepo.save(employee);
  }
}
