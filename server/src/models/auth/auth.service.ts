import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UtenteService } from "../utente/utente.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private utenteService: UtenteService,
        private jwtService: JwtService
    ) {}

    async signIn(username: string, pass: string) : Promise<{access_token: string}> {
        const user = await this.utenteService.findByUsername(username);

        if(user?.password !== pass) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.id, username: user.username};
        
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}