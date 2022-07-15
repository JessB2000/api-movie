/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { FilmeDTO } from "../dto/filme.dto";
import { FilmeService } from "../filme.service";

@Controller('/filme')
export class FilmeController{
    constructor(private filmeService: FilmeService){}
    @Post()
    async createFilme(@Body() data: FilmeDTO) {
        const movies = await this.filmeService.create(data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Filme encontrado com sucesso!',
          movies
        };
      }
    @Get(':id')
    async readFilme(@Param('id') id: number) {
        const data = await this.filmeService.read(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Filme encontrado com sucesso',
          data,
        };
      }
    @Get()
    async showAllFilmes() {
        const movies = await this.filmeService.findAll();
        return {
          statusCode: HttpStatus.OK,
          message: 'Filmes encontrados com sucesso!',
          movies
        };
      }
    @Put(':id')
    async uppdateFilme(@Param('id') id: number, @Body() data: Partial<FilmeDTO>) {
        await this.filmeService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Filme modificado com sucesso',
        };
      }
    @Delete(':id')
    async deleteFilme(@Param('id') id: number) {
        await this.filmeService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Filme deletado com sucesso',
        };
      }
    
}