import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiDstModel } from '../../api-model/api-dst/api-dst.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDstService {

  /* LocalHost for Dev Work */
  //apiUrl = 'http://localhost:3000/api/dst'

  /* IISNode setup on http://express-server.local/ for target Server Machine*/
  apiUrl = 'https://express.noredlace.com/api/dst'

  constructor(private _http: HttpClient) { }

  getServerStatus(): Observable<any> {
    return this._http.get<ApiDstModel>(this.apiUrl);
  }
}
