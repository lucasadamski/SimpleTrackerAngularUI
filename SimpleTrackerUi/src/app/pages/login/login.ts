import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { UserApi } from '../../user-api/user-api';
import { Auth } from '../../services/auth';
import { UserStore } from '../../services/user-store';
import { Router } from '@angular/router';
import ValidateForm from '../../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  loginObj: any = {
    login: '', 
    password: ''
  }

  public loginForm!: FormGroup;
    type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(
    private http: HttpClient, 
    private userApi: UserApi,
    private formBuilder: FormBuilder,
    private auth: Auth,
    private router: Router,
    private toast: NgToastService,
    private store: UserStore
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


 onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.accessToken);
          const tokenPayload = this.auth.decodedToken();
          this.store.setFullName(tokenPayload.name);
          this.toast.success("Success");
          this.router.navigate(['dashboard'])
        },
        error: (err) => {
          this.toast.danger("Error");
          console.log(err);
        },
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }

    onLogin() {
      //this.loginObj.login = 'testing';
      console.log(`onLogin() ${this.loginObj.login} ${this.loginObj.password}`);
      this.userApi.loginUser(this.loginObj).subscribe({
      next: (response) => {
        console.log('response successful: ' + response);
        this.router.navigate(['home']);
        this.auth.storeToken(response.token);
        // write token to storage 
      },
      error: (response) => {
        console.error('response error: ' + response);
      }
    });
    }
  
}
