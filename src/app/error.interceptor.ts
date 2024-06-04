import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'your-auth-token'; 
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.status === 404) {
          errorMessage = '404 ERROR';
          console.error(errorMessage);
        } else if (error.status === 401 || error.status === 403) {
          errorMessage = 'Unauthorized or Forbidden request - redirecting to login';
          console.error(errorMessage);
          this.router.navigate(['/login']);
        } else {
          console.error(`Error Status: ${error.status}\nMessage: ${error.message}`);
        }
        alert(errorMessage); 
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
