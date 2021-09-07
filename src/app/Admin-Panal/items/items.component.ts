import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
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



}
