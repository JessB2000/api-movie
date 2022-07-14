/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class filmes {
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

}