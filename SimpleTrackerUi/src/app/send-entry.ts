import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostData } from './models/post-data.model';

@Injectable({
  providedIn: 'root',
})
export class SendEntry {
  private url = environment.apiUrl + '/Entry'

  constructor(private http : HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  putData(data: any): Observable<any> {
    return this.http.put<any>(this.url, data);
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }
  
}
