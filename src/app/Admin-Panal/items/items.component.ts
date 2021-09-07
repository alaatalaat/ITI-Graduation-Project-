import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemModel } from '../item-dashboard-model';
import { ApiService } from '../api.service';

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
  // products: any = [];
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    // this.httpClient
    //   .get('assets/api/products/products.json')
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.products = data;
    //   });

    this.fromValue = this.formbuilder.group({
      productName: [''],
      productCode: [''],
      releaseDate: [''],
      description: [''],
      size: [''],
      form: [''],
      imgUrl: [''],
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
    this.itemModelObj.imgUrl = this.fromValue.value.imgUrl;

    this.api.postProduct(this.itemModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('تم اضافة المنتج بنجاح');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.fromValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('حدث خطأ ما!!');
      }
    );
  }

  getAllData() {
    this.api.getProduct().subscribe((res) => {
      this.itemData = res;
    });
  }

  deleteProduct(product: any) {
    this.api.deleteProduct(product.productId).subscribe((res) => {
      alert('تم الحذف');
      this.getAllData();
    });
  }

  editProduct(product: any) {
    this.showAdd = true;
    this.showUpdate = false;

    this.itemModelObj.productId = product.productId;
    this.fromValue.controls['productName'].setValue(product.productName);
    this.fromValue.controls['productCode'].setValue(product.productCode);
    this.fromValue.controls['releaseDate'].setValue(product.releaseDate);
    this.fromValue.controls['description'].setValue(product.description);
    this.fromValue.controls['size'].setValue(product.size);
    this.fromValue.controls['form'].setValue(product.form);
    this.fromValue.controls['imgUrl'].setValue(product.imgUrl);
  }

  updateProduct() {
    this.itemModelObj.productName = this.fromValue.value.productName;
    this.itemModelObj.productCode = this.fromValue.value.productCode;
    this.itemModelObj.releaseDate = this.fromValue.value.releaseDate;
    this.itemModelObj.description = this.fromValue.value.description;
    this.itemModelObj.size = this.fromValue.value.size;
    this.itemModelObj.form = this.fromValue.value.form;
    this.itemModelObj.imgUrl = this.fromValue.value.imgUrl;

    this.api
      .updateProduct(this.itemModelObj, this.itemModelObj.productId)
      .subscribe((res) => {
        alert('تم تحديث المنتج بنجاح');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.fromValue.reset();
        this.getAllData();
      });
  }
}
