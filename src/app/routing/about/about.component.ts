import { Component, OnInit } from '@angular/core';
import { ApiJokeModel } from '../../api-model/api-joke/api-joke.model';
import { ApiJokeService } from '../../api-service/api-joke/api-joke.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  apiJokeModels$: ApiJokeModel;

  constructor(private apiJokeService: ApiJokeService) { }

  ngOnInit(): void {
    this.getJokeOfTheDayStatus();
  }

  getJokeOfTheDayStatus() {
    this.apiJokeService.getJokeOfTheDay()
      .subscribe(data => this.apiJokeModels$ = data);
  }

}
