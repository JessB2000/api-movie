/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeModule } from './filme/filme.modules';
import { GeneroModule } from './genero/genero.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import {config as dotenvConfig} from 'dotenv'; 
dotenvConfig(); 
@Module({
  imports: [
    FilmeModule,
    GeneroModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.MYSQL_HOST,
      "port": parseInt(process.env.MYSQL_PORT),
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_PASSWORD,
      "database": process.env.MYSQL_DATABASE,
      "entities": ["dist/*/entity.js"],   
      "migrations": ["dist/migration/*.js"],
      "synchronize": true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
