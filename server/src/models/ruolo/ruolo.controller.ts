import { Controller, Get, HttpCode, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RuoloService } from "./ruolo.service";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/ruolo.decorator";
import { RuoloEnum } from "src/enum/ruolo.enum";

@ApiTags('Ruolo')
@Controller('api/')
export class RuoloController {
    constructor(
        private readonly service: RuoloService
    ) {}

    @UseGuards(AuthGuard)
    @Roles(RuoloEnum.AMMINISTRATORE)
    @HttpCode(200)
    @Get('ruoli')
    async findAll() {
        return await this.service.findAll()
    }
}