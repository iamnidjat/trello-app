import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from '../services/user-service/user-service.service'; 
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'my-secret', 
      signOptions: { expiresIn: '60m' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  exports: [AuthService], 
})
export class AuthModule {}
