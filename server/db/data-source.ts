import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Ruolo } from 'src/models/ruolo/entity/ruolo.entity';
import { Utente } from 'src/models/utente/entity/utente.entity';

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Ruolo, Utente],
    migrations: ['db/migrations/*{.ts,.js}'],
});
