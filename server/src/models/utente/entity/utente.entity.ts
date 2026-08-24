import { Ruolo } from "src/models/ruolo/entity/ruolo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'utente'})
export class Utente {
    @PrimaryGeneratedColumn()
    id: number;

    //? RELAZIONI
    
    @ManyToOne(() => Ruolo,  (ruolo: Ruolo) => ruolo.id, {
        nullable: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_ruolo'})
    ruolo: Ruolo;

    @Column({type: 'varchar', nullable: false, length: 50})
    nome: string;

    @Column({type: 'varchar', nullable: true, length: 50})
    cognome?: string;

    @Column({type: 'varchar', nullable: false, length: 100, unique: true})
    username: string;

    @Column({type: 'varchar', nullable: false, length: 255, unique: true})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'blob', nullable: true})
    foto_profilo?: string;

    @Column({type: 'text', nullable: true, length: 1000})
    bio?: string;

    @Column({type: 'int', nullable: false, default: 0})
    follower_count: number;
    
    @Column({type: 'int', nullable: false, default: 0})
    seguiti_count: number;

    //? METADATI

    @Column({type: 'timestamptz', nullable: false, default: Date.now()})
    created_at: string;

    @Column({type: 'timestamptz', nullable: false, default: Date.now()})
    update_at: string;
}