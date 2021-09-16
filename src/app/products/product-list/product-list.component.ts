import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  email!: any;
  public products: any;
  constructor(
    private api: ApiService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { total: a.price });
      });
    });
    this.email = localStorage.getItem('email');
  }
  addToCart(item: any) {
    if (!this.email) {
      this.router.navigate(['login']);
      return;
    }
    if (item.quantity > 0) {
      this.cartService.addToCart(item);
    } else {
      alert('You Cant Buy This Product Now !!');
    }
  }
}
