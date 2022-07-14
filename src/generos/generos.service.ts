/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { generos } from './generos.entity';

@Injectable()
export class GenerosService {
  constructor(
    @Inject('GENEROS_REPOSITORY')
    private GenerosRepository: Repository<generos>,
  ) {}

  async findAll(): Promise<generos[]> {
    return this.GenerosRepository.find();
  }
}