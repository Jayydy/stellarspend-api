import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { QueryTransactionsDto } from './dto/query-transactions.dto';

@Controller('transactions')
export class TransactionsController {
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return { message: 'Transaction recorded', data: createTransactionDto };
  }

  @Get()
  findAll(@Query() query: QueryTransactionsDto) {
    return { message: 'Transactions list', query };
  }
}
