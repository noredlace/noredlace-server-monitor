import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiTerrariaModel } from '../../api-model/api-terraria/api-terraria.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiTerrariaService {
  /* LocalHost for Dev Work */
  //apiUrl = 'http://localhost:3000/api/terraria'

  /* IISNode setup on http://express-server.local/ for target Server Machine*/
  apiUrl = 'https://express.noredlace.com/api/terraria'

  constructor(private _http: HttpClient) { }

  getServerStatus(): Observable<any> {
    return this._http.get<ApiTerrariaModel>(this.apiUrl);
  }
}

