/* eslint-disable prettier/prettier */
import { Filme } from '../filme/filme.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({length: 100})
  genero: string;

  @ManyToMany(() => Filme, (filme) => filme.generos)
  @JoinTable()
  filmes: Filme[]; 
}