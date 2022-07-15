/* eslint-disable prettier/prettier */
import { Genero } from '../genero/genero.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
@Entity()
export class Filme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  titulopt: string;

  @Column({ length: 255 })
  titulor: string;

  @Column('text')
  sinopse: string;

  @Column({ length: 255 })
  direcao: string;

  @Column('text')
  urltrailler: string;

  @Column('int')
  classificacaoindicativa: number;

  @Column('int')
  anolancamento: number;

  @Column('text')
  poster: string;

  @ManyToMany(() => Genero, (genero) => genero.filmes)
  @JoinTable()
  generos: Genero[]

}