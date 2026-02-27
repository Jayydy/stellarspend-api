import { Body, Controller, Post, Get, BadRequestException } from '@nestjs/common';
import { BudgetsService, ValidationError } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from '../../common/test-utils/fixtures';

/**
 * Budgets Controller
 * Handles HTTP requests for budget management
 */
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  /**
   * POST /budgets
   * Create a new monthly budget
   * 
   * @param createBudgetDto - Budget creation data
   * @returns Created budget with generated ID
   * @throws BadRequestException if validation fails
   */
  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto): Promise<Budget> {
    try {
      return await this.budgetsService.create({
        userId: createBudgetDto.userId,
        category: createBudgetDto.category,
        limit: createBudgetDto.limit,
        period: createBudgetDto.period,
        startDate: new Date(createBudgetDto.startDate),
        endDate: new Date(createBudgetDto.endDate),
        assetCode: createBudgetDto.assetCode
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('An error occurred while creating the budget');
    }
  }

  /**
   * GET /budgets/:userId
   * Get all budgets for a user
   * 
   * @param userId - User ID
   * @returns Array of budgets for the user
   * @throws BadRequestException if user ID is invalid
   */
  @Get(':userId')
  async findByUser(userId: string): Promise<Budget[]> {
    try {
      return await this.budgetsService.findByUserId(userId);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('An error occurred while fetching budgets');
    }
  }
}
