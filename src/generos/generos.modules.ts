/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GenerosProviders } from './generos.providers';
import { GenerosService } from './generos.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...GenerosProviders,
    GenerosService,
  ],
})
export class generosModule {}