import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private api: UsersService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  itemData!: any;

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.api.getProduct().subscribe((res) => {
      this.itemData = res;
    });
  }

  deleteProduct(user: any) {
    this.api.deleteProduct(user.id).subscribe((res) => {
      alert('تم الحذف');
      this.getAllData();
    });
  }
}
