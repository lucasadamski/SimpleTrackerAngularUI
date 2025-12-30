import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  apiUrl = environment.apiUrl + '/User';

  constructor(private http : HttpClient) { }

  loginUser(data : any) : Observable<any> {
    console.log('User login service called');
    return this.http.post<any>(this.apiUrl + '/Login', data);
  }

  signUp(data: any) : Observable<any> {
    return this.http.post<any>(this.apiUrl + '/Create', data);
  }
}
