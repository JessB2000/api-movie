/* eslint-disable prettier/prettier */
import { Genero } from "src/genero/genero.entity";
export interface FilmeDTO {
  id: number;
  titulopt: string;
  titulor: string;
  sinopse: string;
  direcao: string; 
  urltrailler: string; 
  classificacaoindicativa: number;
  anolancamento: number; 
  poster: string; 
  generos: Genero[];
}
