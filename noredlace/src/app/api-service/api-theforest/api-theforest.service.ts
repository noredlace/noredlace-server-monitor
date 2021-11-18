import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiTheForestModel } from '../../api-model/api-theforest/api-theforest.model';

@Injectable({
  providedIn: 'root'
})
export class ApiTheForestService {

  /* LocalHost for Dev Work */
  //apiUrl = 'http://localhost:3000/api/dst'

  /* IISNode setup on http://express-server.local/ for target Server Machine*/
  apiUrl = 'https://express.noredlace.com/api/theforest'

  constructor(private _http: HttpClient) { }

  getServerStatus(): Observable<any> {
    return this._http.get<ApiTheForestService>(this.apiUrl);
  }
}
