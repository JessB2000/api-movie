/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { FilmeController } from './controller/filme.controller';
import { filmeProviders } from './filme.providers';
import { FilmeService } from './filme.service';

@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature([DatabaseModule])],
  providers: [
    ...filmeProviders,
    FilmeService,
  ],
  controllers: [FilmeController], 
})
export class FilmeModule {}