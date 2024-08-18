import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty({ required: false, description: 'The unique identifier for the comment' })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({ description: 'The content of the comment'})
  @IsNotEmpty()
  @IsString()
  content: string;
 
  @ApiProperty({ description: 'The date when the comment was created'})
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ required: false, description: 'The date when the comment was last updated', nullable: true })
  @IsOptional()
  @IsDate()
  updatedAt: Date | null;

  @ApiProperty({ description: 'The unique identifier for the card associated with the comment' })
  @IsNotEmpty()
  @IsInt()
  cardId: number;
}