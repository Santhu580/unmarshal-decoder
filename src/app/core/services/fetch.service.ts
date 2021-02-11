import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }
  sendata(transId,coin): Observable<any> {
    let url = 'https://stg-api.unmarshal.io/v1/'+coin+'/transactions/'+transId+'?auth_key=VGVtcEtleQ%3D%3D'
    return this.http.get<any>(url)
  }
}
