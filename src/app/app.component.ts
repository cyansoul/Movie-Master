import {Component} from '@angular/core';
import {MoviedataService} from './moviedata.service';
import {Movie} from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Master';

  constructor(private dataService: MoviedataService) {

  }
}
