import {Injectable} from '@angular/core';
import {Poster} from './poster';

@Injectable()
export class PosterdataService {

  posters: Poster[];
  jsonData: any;

  constructor() {
    this.posters = [
      new Poster(1, 'assets/howl.jpg'),
      new Poster(2, 'assets/yourname.jpg'),
      new Poster(3, 'assets/castle.jpg'),
    ];
  }

  getPosters(): Poster[] {
    return this.posters;
  }
}
