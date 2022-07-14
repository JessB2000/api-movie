/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { filmesModule } from './filmes/filmes.modules';
import { generosModule } from './generos/generos.modules';

@Module({
  imports: [
    filmesModule,
    generosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
