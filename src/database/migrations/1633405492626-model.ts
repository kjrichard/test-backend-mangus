import {MigrationInterface, QueryRunner} from "typeorm";

export class model1633405492626 implements MigrationInterface {
    name = 'model1633405492626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(15) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(15) NOT NULL, \`pass\` varchar(20) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(15) NOT NULL, \`lastname\` varchar(15) NOT NULL, \`address\` varchar(15) NOT NULL, \`pass\` varchar(20) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employees\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(15) NOT NULL, \`lastname\` varchar(15) NOT NULL, \`address\` varchar(15) NOT NULL, \`phone\` varchar(15) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`pass\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`phone\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`status\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`pass\` varchar(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_59c1e5e51addd6ebebf76230b37\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_737991e10350d9626f592894cef\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_737991e10350d9626f592894cef\``);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_59c1e5e51addd6ebebf76230b37\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`pass\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`pass\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`pass\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`DROP TABLE \`employees\``);
        await queryRunner.query(`DROP TABLE \`clients\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
