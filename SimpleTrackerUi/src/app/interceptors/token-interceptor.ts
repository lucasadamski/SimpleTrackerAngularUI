import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TokenApiModel } from '../../models/token-api.model';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: Auth, private router: Router, private toast: NgToastService) {

  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    if(myToken){
      req = req.clone({
        setHeaders: {Authorization:`Bearer ${myToken}`}
      })
    }

    return next.handle(req).pipe(
    catchError((err: any) => {
      this.toast.danger("Token unauthorized");

      // always return an Observable
      return throwError(() => err);
    })
  );


    
  }


}
