import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviedataService } from '../moviedata.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  movies: Movie[];
  constructor(private dataService: MoviedataService) {

  }

  ngOnInit() {
    this.movies = this.dataService.getMovies();
  }

}
