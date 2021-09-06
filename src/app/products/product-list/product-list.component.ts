import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit() {
    this.httpClient
      .get('assets/api/products/products.json')
      .subscribe((data) => {
        console.log(data);
        this.products = data;
      });
  }
  onSelect(product: {
    productName: any;
    description: any;
    size: string;
    releaseDate: string;
    form: string;
  }) {
    this.router.navigate([
      '/product-details',
      product.productName,
      product.description,
      product.size,
      product.releaseDate,
      product.form,
    ]);
  }
}
