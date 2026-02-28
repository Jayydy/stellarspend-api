import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  async createWallet(publicKey: string, userId: string): Promise<Wallet> {
    const wallet = this.walletRepository.create({ publicKey, userId });
    return await this.walletRepository.save(wallet);
  }

  async findByUserId(userId: string): Promise<Wallet[]> {
    return await this.walletRepository.find({ where: { userId } });
  }

  async findByPublicKey(publicKey: string): Promise<Wallet | null> {
    return await this.walletRepository.findOne({ where: { publicKey } });
  }

  getStatus() {
    return { module: 'Wallet', status: 'Working' };
  }
}