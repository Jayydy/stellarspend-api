import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  MaxLength,
  IsISO8601,
} from 'class-validator';

/**
 * Create Budget DTO
 * Data Transfer Object for creating a new budget
 */
export class CreateBudgetDto {
  @IsString()
  userId: string;

  @IsString()
  @MaxLength(100)
  category: string;

  @IsNumber()
  @Min(0.01)
  limit: number;

  @IsString()
  period: 'monthly' | 'weekly' | 'yearly';

  @IsISO8601()
  startDate: string;

  @IsISO8601()
  endDate: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  assetCode?: string;
}
