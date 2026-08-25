import { SetMetadata } from "@nestjs/common";
import { RuoloEnum } from "src/enum/ruolo.enum";

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RuoloEnum[]) => SetMetadata(ROLES_KEY, roles);