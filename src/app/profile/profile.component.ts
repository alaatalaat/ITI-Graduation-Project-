import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  email!: any;
  mobile: any = '';
  name: any = '';
  constructor() {}

  ngOnInit(): void {
    this.mobile = localStorage.getItem('mobile');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
  }
}
