import { Controller, Get, HttpCode } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RuoloService } from "./ruolo.service";

@ApiTags('Ruolo')
@Controller('api/')
export class RuoloController {
    constructor(
        private readonly service: RuoloService
    ) {}
    @HttpCode(200)
    @Get('ruoli')
    async findAll() {
        return await this.service.findAll()
    }
}