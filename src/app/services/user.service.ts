import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(searchParams: String = ""): Observable<any> {
    return this.http.get<any>(`${environment.userApiUrl}${searchParams}`);
  }
}
