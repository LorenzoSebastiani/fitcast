import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('Authentication')
@Controller('api/auth/')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() body: Record<string, any>) {
        return this.authService.signIn(body.username, body.password);
    }
}