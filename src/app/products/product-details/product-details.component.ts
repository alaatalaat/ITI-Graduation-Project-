import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: {
    name: string;
    description: string;
    size: string;
    releaseDate: string;
    form: string;
  };
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.product = {
      name: this.route.snapshot.params['name'],
      description: this.route.snapshot.params['description'],
      size: this.route.snapshot.params['size'],
      releaseDate: this.route.snapshot.params['releaseDate'],
      form: this.route.snapshot.params['form'],
    };
  }
}
