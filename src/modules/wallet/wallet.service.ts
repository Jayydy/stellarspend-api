import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  getStatus() {
    return { module: 'Wallet', status: 'Working' };
  }
}