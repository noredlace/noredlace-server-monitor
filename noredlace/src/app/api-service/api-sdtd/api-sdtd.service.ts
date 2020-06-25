import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiSdtdModel } from '../../api-model/api-sdtd/api-sdtd.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiSdtdService {
  /* LocalHost for Dev Work */
  //apiUrl = 'http://localhost:3000/api/sdtd'

  /* IISNode setup on http://express-server.local/ for target Server Machine*/
  apiUrl = 'https://express.noredlace.us.to/api/sdtd'

  constructor(private _http: HttpClient) { }

  getServerStatus(): Observable<any> {
    return this._http.get<ApiSdtdModel>(this.apiUrl);
  }
}
