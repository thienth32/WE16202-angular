import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(`${environment.projectApiUrl}`);
  }
  getOne(id: any): Observable<any>{
    return this.http.get<any>(`${environment.projectApiUrl}/${id}`);
  }
  saveAdd(data: any): Observable<any>{
    return this.http.post<any>(`${environment.projectApiUrl}`, data);
  }
  saveEdit(data: any, id: any): Observable<any>{
    return this.http.put<any>(`${environment.projectApiUrl}/${id}`, data);
  }
}
