import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Auth Guard');
    const request = context.switchToHttp().getRequest();
    const apiKey = request?.headers['API_KEY'.toLowerCase()];
    console.log({ apiKey });
    return apiKey === 'SuperSecretAPIKey' ? true : false;
  }
}
