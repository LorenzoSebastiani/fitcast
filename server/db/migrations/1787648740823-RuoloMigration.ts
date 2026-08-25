import { RuoloEnum } from "src/enum/ruolo.enum";
import { MigrationInterface, QueryRunner } from "typeorm";

const roleToInsert = [
    {
        nomenclatura: RuoloEnum.AMMINISTRATORE
    },
    {
        nomenclatura: RuoloEnum.MODERATORE
    },
    {
        nomenclatura: RuoloEnum.UTENTE_REGISTRATO
    }
]

export class RuoloMigration1787648740823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository('ruolo').save(roleToInsert)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
