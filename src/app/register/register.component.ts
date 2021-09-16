import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3001/users', this.signupform.value)
      .subscribe(
        (res) => {
          alert('Sign Up Successful');
          this.signupform.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }

  // =============================================
  // fname: string = '';
  // lname: string = '';
  // erorrmsg: string = '';
  // email: any = '';
  // phone: number = 0;
  // constructor(public Routerlnk: Router) {}
  // loginpage(x: any, y: any) {
  //   if (x.value != '' && y.value != '') {
  //     this.Routerlnk.navigateByUrl('/home');
  //   } else {
  //     this.erorrmsg = 'you must fill all fields';
  //   }
  // }
}
