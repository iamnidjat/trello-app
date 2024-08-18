import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'The username for the login process' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Username must be at least 2 characters long',
  })
  username: string;

  @ApiProperty({ description: 'The password for the login process' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}
