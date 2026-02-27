# Wallet Module Setup

## Installation

Install TypeORM and PostgreSQL dependencies:

```bash
npm install @nestjs/typeorm typeorm pg
```

## Database Configuration

1. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

2. Update the database credentials in `.env` file

3. Ensure PostgreSQL is running and create the database:
```sql
CREATE DATABASE stellarspend;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Running Migrations

Run the migration to create the wallets table:

```bash
npx typeorm migration:run -d ormconfig.ts
```

To revert the migration:

```bash
npx typeorm migration:revert -d ormconfig.ts
```

## Wallet Entity

The wallet entity includes:
- `id`: UUID primary key
- `publicKey`: Unique wallet public key (varchar 255)
- `userId`: UUID reference to user
- `createdAt`: Timestamp of wallet creation

## Available Methods

The WalletService provides:
- `createWallet(publicKey, userId)`: Create a new wallet
- `findByUserId(userId)`: Get all wallets for a user
- `findByPublicKey(publicKey)`: Find wallet by public key
