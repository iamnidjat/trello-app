import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserColumnDto {
  @ApiProperty({ required: false, description: 'The unique identifier for the column' })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({ description: 'The title for the column'})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The position in a board for the column'})
  @IsNotEmpty()
  @IsInt()
  positionInBoard: number;

  @ApiProperty({ description: 'The date when the column was created'})
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ required: false, description: 'The date when the column was last updated', nullable: true })
  @IsOptional()
  @IsDate()
  updatedAt: Date | null;

  @ApiProperty({ description: 'The unique identifier for the user associated with the column' })
  @IsNotEmpty()
  @IsInt()
  userId: number;
}