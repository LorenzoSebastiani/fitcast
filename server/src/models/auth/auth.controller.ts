import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "../utente/dto/login.dto";

@ApiTags('Authentication')
@Controller('api/auth/')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() body: LoginDto) {
        return this.authService.signIn(body);
    }
}