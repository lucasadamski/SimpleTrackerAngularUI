import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserApi {
  
  url = environment.apiUrl + '/User/Login';

  constructor(private http : HttpClient) { }

  loginUser(data : any) : Observable<any> {
    console.log('UserApi');
    return this.http.post<any>(this.url, data);
  }

}
