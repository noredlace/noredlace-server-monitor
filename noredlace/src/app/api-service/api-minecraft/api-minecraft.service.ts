import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMinecraftModel } from '../../api-model/api-minecraft/api-minecraft.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiMinecraftService {
  /* LocalHost for Dev Work */
  //apiUrl = 'http://localhost:3000/api/minecraft'

  /* IISNode setup on http://express-server.local/ for target Server Machine*/
  apiUrl = 'https://express.noredlace.com/api/minecraft'

  constructor(private _http: HttpClient) { }

  getServerStatus(): Observable<any> {
    return this._http.get<ApiMinecraftModel>(this.apiUrl);
  }
}
