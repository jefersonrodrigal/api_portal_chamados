import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableUsers1688003742204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'sobrenome',
            type: 'varchar',
            length: '160',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '120',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '280',
            isNullable: false,
          },
          {
            name: 'fk_chamados',
            type: 'int',
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios')
  }
}
