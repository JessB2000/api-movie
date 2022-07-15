/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GeneroDTO } from './dto/genero.dto';
import { Genero } from './genero.entity';

@Injectable()
export class GeneroService {
  constructor(
    @Inject('GENERO_REPOSITORY')
    private generoRepository: Repository<Genero>,
  ) {}

  async findAll(): Promise<Genero[]> {
    return this.generoRepository.find();
  }
  async create(data: GeneroDTO) {
    const gmovies = this.generoRepository.create(data);
    await this.generoRepository.save(data);
    return gmovies;
  }
  async read(id: number) {
    return await this.generoRepository.findOne({ where: { id: id } });
  }
  async update(id: number, data: Partial<GeneroDTO>) {
    await this.generoRepository.update({ id }, data);
    return await this.generoRepository.findOne({
      where:{id}
    });
  }
  async destroy(id: number) {
    await this.generoRepository.delete({ id });
    return { deleted: true };
  }
}