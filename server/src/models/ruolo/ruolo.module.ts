import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ruolo } from "./entity/ruolo.entity";
import { RuoloService } from "./ruolo.service";
import { RuoloController } from "./ruolo.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Ruolo])],
    providers: [RuoloService],
    controllers: [RuoloController],
    exports: [RuoloService]
})
export class RuoloModule{}