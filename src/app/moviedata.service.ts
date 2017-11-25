import {Injectable} from '@angular/core';
import {MovieComponent} from './movie/movie.component';
import {Movie} from './movie';

@Injectable()
export class MoviedataService {

  movies: Movie[];
  jsonData: any;

  constructor() {
    this.movies = [
      new Movie(1, "Howl's Moving Castle", 'Hayao Miyazaki', 'Sophie has an uneventful life at her late father\'s hat shop, but all that changes when she befriends wizard Howl , who lives in a magical flying castle. However, the evil Witch of Waste takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.', 'http://www.imdb.com/title/tt0347149/'),
      new Movie(2, 'Your Name', 'Hayao Miyazaki', 'Mitsuha is the daughter of the mayor of a small mountain town. She\'s a straightforward high school girl who lives with her sister and her grandmother and has no qualms about letting it be known that she\'s uninterested in Shinto rituals or helping her father\'s electoral campaign. Instead she dreams of leaving the boring town and trying her luck in Tokyo. Taki is a high school boy in Tokyo who works part-time in an Italian restaurant and aspires to become an architect or an artist. Every night he has a strange dream where he becomes...a high school girl in a small mountain town.', 'http://www.imdb.com/title/tt5311514/'),
      new Movie(3, 'Castle in the Sky', 'Hayao Miyazaki', 'A young boy stumbles into a mysterious girl who floats down from the sky. The girl, Sheeta, was chased by pirates, army and government secret agents. In saving her life, they begin a high flying adventure that goes through all sorts of flying machines, eventually searching for Sheeta\'s identity in a floating castle of a lost civilization.', 'http://www.imdb.com/title/tt0092067/'),
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
}
