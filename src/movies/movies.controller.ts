import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

// Controller 에서는 url을 매핑, 리퀘스트를 받거나 Query를 넘긴다.
// Body나 그외의 것들을 관리
@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {

    }

    @Get() 
    getAll() : Movie[] {
        return this.movieService.getAll();
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear} `;
    }
    
    @Get("/:id")
    getOne(@Param('id') movieId: string): Movie {
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return this.movieService.update(movieId, updateData);
    }

    
}
