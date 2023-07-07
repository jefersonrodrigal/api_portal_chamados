import { MigrationInterface, QueryRunner } from "typeorm";

export class createDatabase1688071208975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase("portalDb.sql", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase("portalDb.sql", true);
  }
}
