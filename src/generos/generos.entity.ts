/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class generos {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({length: 100})
  genero: string;

}