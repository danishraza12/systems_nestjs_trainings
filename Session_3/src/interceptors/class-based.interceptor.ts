import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ClassBasedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Class-Based Interceptor.');
    const classBasedInterceptor = 'invoked';

    return next
      .handle()
      .pipe(map((data) => ({ classBasedInterceptor, ...data })));
  }
}
