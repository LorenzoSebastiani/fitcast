import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Ruolo } from "src/models/ruolo/entity/ruolo.entity";

export class PatchUtenteDto{
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ruolo?: Ruolo;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    @IsOptional()
    nome?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    @IsOptional()
    cognome?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    @IsOptional()
    username?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(255)
    @IsOptional()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    foto_profilo?: string;

    @ApiProperty()
    @IsString()
    @MaxLength(1000)
    @IsOptional()
    bio?: string;
}