import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemModel } from '../item-dashboard-model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  fromValue!: FormGroup;
  itemModelObj: ItemModel = new ItemModel();
  itemData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  email!: any;
  password!: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');
    if (this.email !== 'admin@gmail.com' || this.password !== 'admin') {
      this.router.navigate(['home']);
    }
    this.fromValue = this.formbuilder.group({
      productName: [''],
      productCode: [''],
      releaseDate: [''],
      description: [''],
      size: [''],
      form: [''],
      quantity: [''],
      imageUrl: [''],
    });
    this.getAllData();
  }

  emptyFormOnAdd() {
    this.fromValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails() {
    this.itemModelObj.productName = this.fromValue.value.productName;
    this.itemModelObj.productCode = this.fromValue.value.productCode;
    this.itemModelObj.releaseDate = this.fromValue.value.releaseDate;
    this.itemModelObj.description = this.fromValue.value.description;
    this.itemModelObj.size = this.fromValue.value.size;
    this.itemModelObj.form = this.fromValue.value.form;
    this.itemModelObj.quantity = this.fromValue.value.quantity;
    this.itemModelObj.imageUrl = this.fromValue.value.imageUrl;

    this.api.postProduct(this.itemModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('???? ?????????? ???????????? ??????????');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.fromValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('?????? ?????? ????!!');
      }
    );
  }

  getAllData() {
    this.api.getProduct().subscribe((res) => {
      this.itemData = res;
    });
  }

  deleteProduct(product: any) {
    this.api.deleteProduct(product.id).subscribe((res) => {
      alert('???? ??????????');
      this.getAllData();
    });
  }

  editProduct(product: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.itemModelObj.id = product.id;
    this.fromValue.controls['productName'].setValue(product.productName);
    this.fromValue.controls['productCode'].setValue(product.productCode);
    this.fromValue.controls['releaseDate'].setValue(product.releaseDate);
    this.fromValue.controls['description'].setValue(product.description);
    this.fromValue.controls['size'].setValue(product.size);
    this.fromValue.controls['form'].setValue(product.form);
    this.fromValue.controls['quantity'].setValue(product.quantity);
    this.fromValue.controls['imageUrl'].setValue(product.imageUrl);
  }

  updateProduct() {
    this.itemModelObj.productName = this.fromValue.value.productName;
    this.itemModelObj.productCode = this.fromValue.value.productCode;
    this.itemModelObj.releaseDate = this.fromValue.value.releaseDate;
    this.itemModelObj.description = this.fromValue.value.description;
    this.itemModelObj.size = this.fromValue.value.size;
    this.itemModelObj.form = this.fromValue.value.form;
    this.itemModelObj.quantity = this.fromValue.value.quantity;
    this.itemModelObj.imageUrl = this.fromValue.value.imageUrl;

    this.api
      .updateProduct(this.itemModelObj, this.itemModelObj.id)
      .subscribe((res) => {
        alert('???? ?????????? ???????????? ??????????');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.fromValue.reset();
        this.getAllData();
      });
  }
}
