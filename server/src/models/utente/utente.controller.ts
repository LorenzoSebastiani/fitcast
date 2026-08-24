import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UtenteService } from "./utente.service";
import { CreateUtenteDto } from "./dto/create-utente.dto";

@ApiTags('Utenti')
@Controller('api/')
export class UtenteController {
    constructor(
        private readonly service: UtenteService,
    ) {}

    @HttpCode(200)
    @Get('utenti')
    async findAll() {
        return await this.service.findAll();
    }

    @HttpCode(200)
    @Get('utenti/:id')
    async findOne(@Param('id') id: number) {
        return await this.service.findOne(id);
    }

    @HttpCode(201)
    @Post('utenti')
    async create(@Body() body: CreateUtenteDto) {
        return await this.service.create(body);
    }

    @HttpCode(200)
    @Patch('utenti/:id')
    async patch(@Param('id') id: number, @Body() body: CreateUtenteDto) {
        return await this.service.patch(id, body);
    }

    @HttpCode(204)
    @Delete('utenti/:id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}