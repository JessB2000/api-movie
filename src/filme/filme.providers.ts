/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Filme } from './filme.entity';

export const filmeProviders = [
  {
    provide: 'FILME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Filme),
    inject: ['DATA_SOURCE'],
  },
];