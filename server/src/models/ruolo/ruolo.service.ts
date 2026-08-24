import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ruolo } from "./entity/ruolo.entity";
import { Repository } from "typeorm";

@Injectable()
export class RuoloService {
    constructor(
        @InjectRepository(Ruolo)
        private repository: Repository<Ruolo>
    ) {}

    //? GET
    async findAll() {
        try {
            return await this.repository.createQueryBuilder('ruolo')
            .orderBy('nomenclatura', 'ASC')
            .execute();
        } catch (err) {
            Logger.error('Errore nella lettura dei ruoli >> RuoloService/findAll: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }
}