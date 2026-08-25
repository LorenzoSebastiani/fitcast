import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entity/post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { PatchPostDto } from "./dto/patch-post.dto";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private repository: Repository<Post>
    ) { }

    //? GET
    async findAll() {
        try {
            return await this.repository.createQueryBuilder('post')
                .leftJoinAndSelect('post.utente', 'utente')
                .orderBy('created_at', 'DESC')
                .execute()
        } catch (err) {
            Logger.error('Errore nella lettura dei post >> PostService/findAll: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? GET 
    async findUserPosts(id_user: number) {
        try {
            return await this.repository.createQueryBuilder('post')
                .leftJoinAndSelect('post.utente', 'utente')
                .where({
                    utente: {
                        id_user
                    }
                })
                .orderBy('created_at', 'DESC')
                .execute()
        } catch (err) {
            Logger.error('Errore nella lettura dei post >> PostService/findUserPosts: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? GET 
    async findOne(id: number) {
        try {
            return await this.repository.createQueryBuilder('post')
                .leftJoinAndSelect('post.utente', 'utente')
                .where({
                    id
                })
                .execute()
        } catch (err) {
            Logger.error('Errore nella lettura del post >> PostService/findOne: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? POST
    async create(body: CreatePostDto) {
        try {
            return await this.repository.save(body);
        } catch (err) {
            Logger.error('Errore nella creazione del post >> PostService/create: ', err);
            throw new HttpException('Errore', HttpStatus.BAD_REQUEST);
        }
    }

    //? PATCH
    async patch(id: number, body: PatchPostDto) {
        
    }
}