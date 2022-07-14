/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { filmes } from './filmes.entity';

export const FilmesProviders = [
  {
    provide: 'FILMES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(filmes),
    inject: ['DATA_SOURCE'],
  },
];