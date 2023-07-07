import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class createRelationshipAtendentes1Nchamados1688563727576
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKey = new TableForeignKey({
      columnNames: ['fk_atendentes'],
      referencedColumnNames: ['id'],
      referencedTableName: 'atendentes',
    })
    await queryRunner.createForeignKey('chamados', foreignKey)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const foreignKey = new TableForeignKey({
      columnNames: ['fk_atendentes'],
      referencedColumnNames: ['id'],
      referencedTableName: 'atendentes',
    })
    await queryRunner.dropForeignKey('chamados', foreignKey)
  }
}
