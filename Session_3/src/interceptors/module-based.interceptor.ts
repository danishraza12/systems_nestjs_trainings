import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ModuleBasedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Module-Based Interceptor.');
    const moduleBasedInterceptor = 'invoked';
    return next
      .handle()
      .pipe(map((data) => ({ moduleBasedInterceptor, ...data })));
  }
}
