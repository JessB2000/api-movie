/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { GeneroController } from './controller/genero.controller';
import { generoProviders } from './genero.providers';
import { GeneroService } from './genero.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([DatabaseModule])],
  providers: [
    ...generoProviders,
    GeneroService,
  ],
  controllers: [GeneroController], 
})
export class GeneroModule {}