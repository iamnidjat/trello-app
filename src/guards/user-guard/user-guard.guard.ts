import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); 
    const userId = request.params.userId;
    
    if (request.session && request.session.user) {
      if (request.session.user.id == userId) {
        return true;
      }
    }

    throw new UnauthorizedException('You are not authorized to perform this action');
  }
}
