import { Component, OnInit } from '@angular/core';
import { Poster } from '../poster';
import { PosterdataService } from '../posterdata.service';

@Component({
  selector: 'app-slider',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent implements OnInit {
  posters: Poster[];
  constructor(private dataService: PosterdataService) {

  }

  ngOnInit() {
    this.posters = this.dataService.getPosters();
  }
}
