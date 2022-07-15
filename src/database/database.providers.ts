/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import {config as dotenvConfig} from 'dotenv'; 
dotenvConfig(); 
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        "type": "mysql",
        "host": process.env.MYSQL_HOST,
        "port": parseInt(process.env.MYSQL_PORT),
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE,
        "entities": ["dist/*/entity.js"],   
        "migrations": ["dist/migration/*.js"],
        "synchronize": true,
      });
      return dataSource.initialize();
    },
  },
];