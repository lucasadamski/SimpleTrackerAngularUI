import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { UserApi } from '../../user-api/user-api';
import { Auth } from '../../services/auth';
import { NgToastService } from 'ng-angular-popup';
import { UserStore } from '../../services/user-store';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  loginObj: any = {
    login: '', 
    password: ''
  }

  public loginForm!: FormGroup;

  constructor(
    private http: HttpClient, 
    private userApi: UserApi,
    private formBuilder: FormBuilder,
    private auth: Auth,
    private toast: NgToastService,
    private store: UserStore
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }




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
