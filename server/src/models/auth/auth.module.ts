import { Module } from "@nestjs/common";
import { UtenteModule } from "../utente/utente.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [UtenteModule, JwtModule.registerAsync({
        global: true,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_CONSTANT'),
            signOptions: { expiresIn: '60s' }
        })
    })],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}