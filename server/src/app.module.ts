import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuoloModule } from './models/ruolo/ruolo.module';
import { Ruolo } from './models/ruolo/entity/ruolo.entity';
import { UtenteModule } from './models/utente/utente.module';
import { Utente } from './models/utente/entity/utente.entity';
import { AuthModule } from './models/auth/auth.module';

const envFile = `envs/.env.${process.env.NODE_ENV ?? 'development'}`

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: envFile,
    isGlobal: true
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Ruolo, Utente],
    migrations: [`../db/migrations/*{.ts,.js}`],
    migrationsRun: true,
    synchronize: true
  }),
    RuoloModule,
    UtenteModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
