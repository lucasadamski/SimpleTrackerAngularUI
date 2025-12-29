import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { User } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  loginObj: any = {
    login: '', 
    password: ''
  }

  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  
  constructor(private auth: Auth, 
    private formBuilder: FormBuilder,
    private userService: User,
    private router: Router) {}

    ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignUp() {
    this.userService.signUp(this.loginObj).subscribe({
      next: (res) => {
        this.router.navigate(['home']);
        this.auth.storeToken(res.token);
      },
      error: () => {}
    });
  }
}
