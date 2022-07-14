/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FilmesProviders } from './filmes.providers';
import { FilmesService } from './filmes.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...FilmesProviders,
    FilmesService,
  ],
})
export class filmesModule {}