import { HttpInterceptorFn } from '@angular/common/http';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const token = auth.getToken();
  
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  console.log("interceptor called");
  
  return next(req);
};



