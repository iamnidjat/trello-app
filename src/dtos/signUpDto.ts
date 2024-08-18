import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ description: 'The username for the registration process' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Username must be at least 2 characters long',
  })
  username: string;

  @ApiProperty({ description: 'The email for the registration process' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password for the registration process' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}
