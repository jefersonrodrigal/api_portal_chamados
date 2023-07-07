import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class createRelationshipUsuarios1Nchamados1688449083118
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKey = new TableForeignKey({
      columnNames: ['fk_usuarios'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
      onDelete: 'CASCADE',
    })
    await queryRunner.createForeignKey('chamados', foreignKey)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const foreignKey = new TableForeignKey({
      columnNames: ['fk_usuarios'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuarios',
      onDelete: 'CASCADE',
    })
    await queryRunner.dropForeignKey('chamados', foreignKey)
  }
}
