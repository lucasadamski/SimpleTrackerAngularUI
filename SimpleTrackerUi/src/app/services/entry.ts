import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Entry {
  private apiUrl = environment.apiUrl + '/Entry';

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postData(data: any): Observable<any> {
    console.log(`Sending ${data} to ${this.apiUrl}`);
    return this.http.post<any>(this.apiUrl + '/Create', data);
  }

  putData(data: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, data);
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + `/${id}`);
  }
}
