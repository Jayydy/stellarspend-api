import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    TransactionsModule,
    WalletModule,
  ],
})
export class AppModule {}
