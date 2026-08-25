import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Utente } from "src/models/utente/entity/utente.entity";

export class PatchPostDto{
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(20)
    titolo?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MaxLength(1000)
    descrizione?: string;
}