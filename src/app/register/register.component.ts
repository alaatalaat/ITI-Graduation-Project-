import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  erorrmsg: string = '';
  email: any = '';
  phone: number = 0;
  constructor(public Routerlnk: Router) {}
  loginpage(x: any, y: any) {
    if (x.value != '' && y.value != '') {
      this.Routerlnk.navigateByUrl('/home');
    } else {
      this.erorrmsg = 'you must fill all fields';
    }
  }
  ngOnInit(): void {}
}
