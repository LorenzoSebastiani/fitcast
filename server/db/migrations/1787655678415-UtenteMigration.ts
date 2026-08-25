import { RuoloEnum } from "src/enum/ruolo.enum";
import { MigrationInterface, QueryRunner } from "typeorm";

const utenteToInsert = [
    {
        ruolo: RuoloEnum.AMMINISTRATORE || 1,
        nome: 'Admin',
        cognome: 'Admin',
        username: 'amministratore',
        email: 'admin@admin.fk',
        password: 'admin'
    }
]

export class UtenteMigration1787655678415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.dataSource.getRepository('utente').save(utenteToInsert)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
