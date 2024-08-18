import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CardDto {
  @ApiProperty({ required: false, description: 'The unique identifier for the card' })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ required: false, description: 'The description for the card' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ description: 'The position in a column for the card'})
  @IsNotEmpty()
  @IsInt()
  positionInColumn: number;

  @ApiProperty({ description: 'The deadline for the card'})
  @IsNotEmpty() 
  @IsDate()
  deadline: Date;

  @ApiProperty({ description: 'The date when the card was created'})
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ required: false, description: 'The date when the card was last updated', nullable: true })
  @IsOptional()
  @IsDate()
  updatedAt: Date | null;

  @ApiProperty({ description: 'The unique identifier for the column associated with the card' })
  @IsNotEmpty()
  @IsInt()
  columnId: number;
}
