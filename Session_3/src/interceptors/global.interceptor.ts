import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Global Interceptor.');
    const globalInterceptor = 'invoked';

    return next.handle().pipe(map((data) => ({ globalInterceptor, ...data })));
  }
}
