import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';
import { CustomLogger } from '../../common/customer.logger';

@Injectable()
export class AuthService {
  logger = new CustomLogger(AuthService.name);

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly jwtService: JwtService,
  ) {}

  async login(employeeId: number): Promise<any> {
    this.logger.log(`${this.login.name} invoked`);

    const employee = await this.employeeService.getEmployeeById(employeeId);
    return { jwt: this.jwtService.sign({ ...employee }) };
  }
}
