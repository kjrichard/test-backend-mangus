import {MigrationInterface, QueryRunner} from "typeorm";

export class init1633376317139 implements MigrationInterface {
    name = 'init1633376317139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`pass\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`pass\` varchar(128) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`pass\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`pass\` varchar(20) NOT NULL`);
    }

}
