import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Utente } from "./entity/utente.entity";
import { Repository } from "typeorm";
import { CreateUtenteDto } from "./dto/create-utente.dto";
import { PatchUtenteDto } from "./dto/patch-utente.dto";

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
    async create(body: CreateUtenteDto) {
        try {
            const emailEsistente = await this.repository.find({
                where: {
                    email: body.email
                }
            })

            const usernameEsistente = await this.repository.find({
                where: {
                    username: body.username
                }
            })

            if (emailEsistente.length > 0) {
                throw new HttpException('Email già in uso', HttpStatus.CONFLICT);
            }

            if (usernameEsistente.length > 0) {
                throw new HttpException('Username già in uso', HttpStatus.CONFLICT);
            }

            return await this.repository.save(body);
        } catch (err) {
            Logger.error('Errore nella creazione dell\'utente >> UtenteService/create: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? PATCH
    async patch(id: number, body: PatchUtenteDto) {
        try {
            return await this.repository.update(id, body);
        } catch (err) {
            Logger.error('Errore nella modifica dell\'utente >> UtenteService/patch: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? DELETE
    async delete(id: number) {
        try {
            return await this.repository.delete(id);
        } catch (err) {
            Logger.error('Errore nella cancellazione dell\'utente >> UtenteService/delete: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }
}