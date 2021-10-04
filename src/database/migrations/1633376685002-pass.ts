import {MigrationInterface, QueryRunner} from "typeorm";

export class pass1633376685002 implements MigrationInterface {
    name = 'pass1633376685002'

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
