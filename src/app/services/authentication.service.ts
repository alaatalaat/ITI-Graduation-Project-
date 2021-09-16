import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
export interface LoginForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm) {
    return this.http
      .post<any>('http://localhost:3001/users', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }
  // postUser(data: any) {
  //   return this.http.post<any>('http://localhost:3001/users', data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
}
