/* eslint-disable prettier/prettier */
import { Filme } from "src/filme/filme.entity";
export interface GeneroDTO{
    id: number;
    genero: string; 
    filmes: Filme[]; 
}