import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class createTableReports1688074400750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chamados',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'assunto',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'chamado',
            type: 'varchar',
            length: '250',
            isNullable: false,
          },
          {
            name: 'pendente',
            type: 'boolean',
            default: 'true',
            isNullable: false,
          },
          {
            name: 'em_progresso',
            type: 'boolean',
            default: 'false',
            isNullable: false,
          },
          {
            name: 'concluido',
            type: 'boolean',
            default: 'false',
            isNullable: false,
          },
          {
            name: 'fk_usuarios',
            type: 'int',
          },
          {
            name: 'fk_atendentes',
            type: 'int',
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chamados')
  }
}
