import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UtenteService } from "../utente/utente.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../utente/dto/login.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private utenteService: UtenteService,
        private jwtService: JwtService
    ) {}

    async signIn(body: LoginDto) : Promise<{access_token: string}> {
        const user = await this.utenteService.findByUsername(body.username);

        const isMatch = await bcrypt.compare(body.password, user.password);

        if(!isMatch) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.id, username: user.username};
        
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}