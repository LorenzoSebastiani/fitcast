import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Utente } from "src/models/utente/entity/utente.entity";

export class CreatePostDto{
    @ApiProperty()
    @IsNumber()
    utente: Utente;

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

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    first_vote: string;

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    second_vote: string;
}