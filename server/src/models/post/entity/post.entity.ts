import { Utente } from "src/models/utente/entity/utente.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'post'})
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Utente, (utente: Utente) => utente.id, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_utente'})
    utente: Utente;

    @Column({type: 'varchar', nullable: true, length: 20})
    titolo?: string;

    @Column({type: 'varchar', nullable: true, length: 1000})
    descrizione?: string;

    @Column({type: 'varchar', nullable: false, length: 100})
    first_vote: string;

    @Column({type: 'varchar', nullable: false, length: 100})
    second_vote: string;

    @Column({type: 'int', nullable: true, default: 0})
    first_vote_count?: number;

    @Column({type: 'int', nullable: true, default: 0})
    second_vote_count?: number;

    @Column({type: 'int', nullable: true, default: 0})
    reposts_count?: number;

    //? METADATI
    
    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;
    
    @UpdateDateColumn({type: 'timestamptz'})
    update_at: Date;
}