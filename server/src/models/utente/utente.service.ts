import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Utente } from "./entity/utente.entity";
import { Repository } from "typeorm";
import { CreateUtenteDto } from "./dto/create-utente.dto";

@Injectable()
export class UtenteService{
    constructor(
        @InjectRepository(Utente)
        private repository: Repository<Utente>
    ) {}

    //? GET
    async findAll() {
        try {
            return await this.repository.createQueryBuilder('utente')
            .leftJoinAndSelect('utente.ruolo', 'ruolo')
            .orderBy('username', 'ASC')
            .execute();
        } catch (err) {
            Logger.error('Errore nella lettura degli utenti >> UtenteService/findAll: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? GET
    async findOne(id: number) {
        try {
            return await this.repository.createQueryBuilder('utente')
            .leftJoinAndSelect('utente.ruolo', 'ruolo')
            .where({
                id: id
            })
            .execute();
        } catch (err) {
            Logger.error('Errore nella lettura degli utenti >> UtenteService/findOne: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? POST
    async create(body: CreateUtenteDto) {}
}