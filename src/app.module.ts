import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { BudgetsModule } from './modules/budgets/budgets.module';

@Module({
  imports: [UsersModule, TransactionsModule, BudgetsModule],
})
export class AppModule {}
