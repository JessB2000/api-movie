/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { generos } from './generos.entity';

export const GenerosProviders = [
  {
    provide: 'GENEROS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(generos),
    inject: ['DATA_SOURCE'],
  },
];