/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FilmeDTO } from './dto/filme.dto';
import { Filme } from './filme.entity';

@Injectable()
export class FilmeService {
  constructor(
    @Inject('FILME_REPOSITORY')
    private filmeRepository: Repository<Filme>,
  ) {}

  async findAll(): Promise<Filme[]> {
    return await this.filmeRepository.find();
  }
  async create(data: FilmeDTO) {
    const movies = this.filmeRepository.create(data);
    await this.filmeRepository.save(data);
    return movies;
  }
  async read(id: number) {
    return await this.filmeRepository.findOne({ where: { id: id } });
  }
  async update(id: number, data: Partial<FilmeDTO>) {
    await this.filmeRepository.update({ id }, data);
    return await this.filmeRepository.findOne({
      where:{id}
    });
  }
  async destroy(id: number) {
    await this.filmeRepository.delete({ id });
    return { deleted: true };
  }
}