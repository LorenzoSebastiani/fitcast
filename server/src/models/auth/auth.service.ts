import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UtenteService } from "../utente/utente.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly utenteService: UtenteService
    ) {}

    async signIn(username: string, pass: string) : Promise<any> {
        const user = await this.utenteService.findByUsername(username);

        if(user?.password !== pass) {
            throw new UnauthorizedException()
        }

        const {password, ...result} = user;
        // TODO: Generate a JWT and return it instead of the user object
        return result;
    }
}