import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateWalletTable1709049600000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'wallets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'publicKey',
            type: 'varchar',
            length: '255',
            isUnique: true,
          },
          {
            name: 'userId',
            type: 'uuid',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'wallets',
      new TableIndex({
        name: 'IDX_WALLET_USER_ID',
        columnNames: ['userId'],
      }),
    );

    await queryRunner.createIndex(
      'wallets',
      new TableIndex({
        name: 'IDX_WALLET_PUBLIC_KEY',
        columnNames: ['publicKey'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('wallets', 'IDX_WALLET_PUBLIC_KEY');
    await queryRunner.dropIndex('wallets', 'IDX_WALLET_USER_ID');
    await queryRunner.dropTable('wallets');
  }
}
