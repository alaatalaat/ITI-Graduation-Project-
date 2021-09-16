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
  productName!: any;
  description!: any;
  size!: any;
  form!: any;
  quantity!: any;
  imageUrl!: any;
  public products: any;
  public filterCategory: any;
  constructor(
    private api: ApiService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.products = res;
      this.filterCategory = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { total: a.price });
      });
    });
    this.email = localStorage.getItem('email');
  }
  showItem(item: any) {
    localStorage.setItem('productName', item.productName);
    localStorage.setItem('description', item.description);
    localStorage.setItem('size', item.size);
    localStorage.setItem('form', item.form);
    localStorage.setItem('quantity', item.quantity);
    localStorage.setItem('imageUrl', item.imageUrl);
    console.log(item);
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
  getData() {
    this.productName = localStorage.getItem('productName');
    this.description = localStorage.getItem('description');
    this.size = localStorage.getItem('size');
    this.form = localStorage.getItem('form');
    this.quantity = localStorage.getItem('quantity');
    this.imageUrl = localStorage.getItem('imageUrl');
  }
  clearStorage() {
    localStorage.clear();
  }
  filter(category: string) {
    this.filterCategory = this.products.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
