import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productName!: any;
  description!: any;
  size!: any;
  form!: any;
  quantity!: any;
  imageUrl!: any;
  ngOnInit(): void {
    this.productName = localStorage.getItem('productName');
    this.description = localStorage.getItem('description');
    this.size = localStorage.getItem('size');
    this.form = localStorage.getItem('form');
    this.quantity = localStorage.getItem('quantity');
    this.imageUrl = localStorage.getItem('imageUrl');
  }
  // product!: {
  //   name: string;
  //   description: string;
  //   size: string;
  //   releaseDate: string;
  //   form: string;
  // };
  // constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}
  // ngOnInit(): void {
  //   this.product = {
  //     name: this.route.snapshot.params['name'],
  //     description: this.route.snapshot.params['description'],
  //     size: this.route.snapshot.params['size'],
  //     releaseDate: this.route.snapshot.params['releaseDate'],
  //     form: this.route.snapshot.params['form'],
  //   };
  // }
}
