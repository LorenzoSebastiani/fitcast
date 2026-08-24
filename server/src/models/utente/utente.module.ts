import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Utente } from "./entity/utente.entity";
import { UtenteService } from "./utente.service";
import { UtenteController } from "./utente.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Utente])],
    providers: [UtenteService],
    controllers: [UtenteController],
    exports: [UtenteService]
})
export class UtenteModule {}