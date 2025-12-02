import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { UserApi } from '../../user-api/user-api';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  loginObj: any = {
    login: '', 
    password: ''
  }
  constructor(private http : HttpClient, private userApi : UserApi) { }


    onLogin() {
      //this.loginObj.login = 'testing';
      console.log(`onLogin() ${this.loginObj.login} ${this.loginObj.password}`);
      this.userApi.loginUser(this.loginObj).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.error(response);
      }
    });
    }
  
}
