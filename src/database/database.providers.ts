/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'db4free.net',
        port: 3306,
        username: 'bancomovies',
        password: 'TheBestMoviesof2022*',
        database: 'bancofilmes',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, 

    });

      return dataSource.initialize();
    },
  },
];
