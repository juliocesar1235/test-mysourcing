import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  endpoint = 'http://localhost:8080';

  constructor(
    private httpClient: HttpClient
    ) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createUser(newUser: User): Observable<any> {
    return this.httpClient
    .post<any>();
  }

}