/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { filmes } from './filmes.entity';

@Injectable()
export class FilmesService {
  constructor(
    @Inject('FILMES_REPOSITORY')
    private FilmesRepository: Repository<filmes>,
  ) {}

  async findAll(): Promise<filmes[]> {
    return this.FilmesRepository.find();
  }
}