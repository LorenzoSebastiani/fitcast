import { Ruolo } from "src/models/ruolo/entity/ruolo.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'utente'})
export class Utente {
    @PrimaryGeneratedColumn()
    id: number;

    //? RELAZIONI
    
    @ManyToOne(() => Ruolo,  (ruolo: Ruolo) => ruolo.id, {
        nullable: true,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_ruolo'})
    ruolo?: Ruolo;

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

    @Column({type: 'varchar', nullable: true})
    foto_profilo?: string;

    @Column({type: 'varchar', nullable: true, length: 1000})
    bio?: string;

    @Column({type: 'int', nullable: false, default: 0})
    follower_count: number;
    
    @Column({type: 'int', nullable: false, default: 0})
    seguiti_count: number;

    //? METADATI

    @CreateDateColumn({type: 'timestamptz'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamptz'})
    update_at: Date;
}