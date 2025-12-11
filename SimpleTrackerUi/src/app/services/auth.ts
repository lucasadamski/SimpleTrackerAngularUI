import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl: string = environment.apiUrl + '/User';
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  getToken() {
    localStorage.getItem('token');
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  signIn(login: any) {
    return this.http.post<any>(`${this.baseUrl}/authenticate}`, login);
  }

  
}
