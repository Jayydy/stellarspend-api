import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getStatus() {
    return { module: 'Auth', status: 'Working' };
  }
}