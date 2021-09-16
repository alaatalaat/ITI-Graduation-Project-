import { Component, OnInit } from '@angular/core';
import { CartService } from './../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-navbar',
  templateUrl: './first-navbar.component.html',
  styleUrls: ['./first-navbar.component.css'],
})
export class FirstNavbarComponent implements OnInit {
  loginText = 'تسجيل الدخول';
  email!: any;
  public totalItem: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    if (this.email) {
      this.loginText = 'تسجيل الخروج';
    } else {
      this.loginText = 'تسجيل الدخول';
    }
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  login() {
    if (this.email) {
      localStorage.clear();
      this.email = null;
      this.loginText = 'تسجيل الدخول';
    } else {
      this.router.navigate(['login']);
    }
  }
}
