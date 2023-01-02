import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiJokeModel } from '../../api-model/api-joke/api-joke.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJokeService {
  /* LocalHost Testing URL for API */
  //apiUrl = 'http://localhost:3000/api/jokes/jod'

  /* Production URL for API */
  apiUrl = 'https://express.noredlace.com/api/jokes/jod'

  constructor(private _http: HttpClient) { }

  getJokeOfTheDay(): Observable<any> {
    return this._http.get<ApiJokeModel>(this.apiUrl);
  }
}
