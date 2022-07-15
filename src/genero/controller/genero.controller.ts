/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { GeneroDTO } from "../dto/genero.dto";
import { GeneroService } from "../genero.service";

/* eslint-disable prettier/prettier */
@Controller('/genero')
export class GeneroController{
    constructor(private generoService: GeneroService){}
    @Post()
    async createGenero(@Body() data: GeneroDTO) {
        const gmovies = await this.generoService.create(data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Genero criado com sucesso!',
          gmovies
        };
      }
    @Get(':id')
    async readGenero(@Param('id') id: number) {
        const data = await this.generoService.read(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Genero encontrado com sucesso',
          data,
        };
      }
    @Get()
    async showAllGeneros() {
        const gmovies = await this.generoService.findAll();
        return {
          statusCode: HttpStatus.OK,
          message: 'Generos encontrados com sucesso!',
          gmovies
        };
      }
    @Put(':id')
    async uppdateGenero(@Param('id') id: number, @Body() data: Partial<GeneroDTO>) {
        await this.generoService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Genero modificado com sucesso',
        };
      }
    @Delete(':id')
    async deleteGenero(@Param('id') id: number) {
        await this.generoService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Genero deletado com sucesso',
        };
      }
}