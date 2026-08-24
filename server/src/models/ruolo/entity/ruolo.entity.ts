import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ruolo'})
export class Ruolo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", nullable: false, length: 50})
    nomenclatura: string;
}