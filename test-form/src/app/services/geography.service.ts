import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeographyService {
  endpoint = 'https://api.copomex.com';

  token = '2ea25fe2-1bbb-4372-8b6a-919aa480f99a';
  
  constructor(
    private httpClient: HttpClient
  ) {}
  
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getZipcodes(zipCode: string, limit: number): Observable<any> {
    return this.httpClient
    .get<any>(this.endpoint+'/query/search_cp/'+zipCode+`?limit=${limit}&token=${this.token}`);
  }
}