export class Movie {

  id: number;
  name: string;
  director: string;
  summary: string;
  imdb: string;

  constructor(id: number, name: string, director: string, summary: string, imdb: string) {
    this.id = id,
      this.name = name,
      this.director = director,
      this.summary = summary,
    this.imdb = imdb;
  }
}
