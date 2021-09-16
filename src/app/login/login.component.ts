import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { AuthenticationService } from '../services/authentication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email!: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    if (this.email) {
      this.router.navigate(['home']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3001/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          console.log(user);
          localStorage.setItem('name', user.fullname);
          localStorage.setItem('mobile', user.mobile);
          localStorage.setItem('email', user.email);
          localStorage.setItem('password', user.password);
          if (
            this.loginForm.value.email === 'admin@gmail.com' &&
            this.loginForm.value.password === 'admin'
          ) {
            this.router.navigate(['admin']);
          } else {
            location.reload();
            this.router.navigate(['home']);
          }
        } else {
          alert('User Not Found, pls check your email or password !!');
        }
        this.loginForm.reset();
      },
      (err) => {
        alert('Something Went Wrong !!');
      }
    );
  }

  //============================
  // constructor(
  //   public router: Router,
  //   private authService: AuthenticationService
  // ) {}

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl(null, [
  //       Validators.required,
  //       Validators.email,
  //       Validators.maxLength(6),
  //     ]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(5),
  //     ]),
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.authService
  //     .login(this.loginForm.value)
  //     .pipe(map((res) => this.router.navigate(['admin'])))
  //     .subscribe();
  // }

  //-----------------------
  // save(d: any) {
  //   console.log(d);
  // }
  // display() {
  //   console.log(this.password);
  // }
  // redAdmin(x: any, y: any) {
  //   if (x.value == 'admin' && y.value == 'admin') {
  //     this.router.navigateByUrl('/admin');
  //     this.errormsgflag = true;
  //   } else {
  //     this.errormsg = 'اسم المستخدم او الرقم السري قد يكون خاطئ!';
  //     this.errormsgflag = false;
  //   }
  // }
}
