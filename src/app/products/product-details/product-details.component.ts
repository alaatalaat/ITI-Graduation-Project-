import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: { name: string };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = {
      name: this.route.snapshot.params['name'],
    };
  }
}
