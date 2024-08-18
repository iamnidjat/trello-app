import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ required: false, description: 'The unique identifier for the user'  })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({ description: 'The username for the user' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'The email for the user' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password for the user' })
  @IsNotEmpty()
  @IsString()
  password: string;
}