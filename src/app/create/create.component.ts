import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = new Product();
  constructor(private _productService: ProductService) { }

  onSubmit() {
    console.log('submitting');
    this._productService.addToProductList(this.product);
    this.product = new Product();
  }

  ngOnInit() {
  }

}
