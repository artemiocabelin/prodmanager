import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  tempProduct = new Product();
  constructor(private _route: ActivatedRoute, private _productService: ProductService, private router: Router) {
    this._route.paramMap
      .switchMap(params => {
        return this._productService.getProductById(params.get('id'));
      }).subscribe((product) => {
        this.product = product; 
        this.tempProduct.title = product.title;
        this.tempProduct.image = product.image;
        this.tempProduct.price = product.price;
      });
  }

  onSubmit() {
    console.log('hello');
    this.product.title = this.tempProduct.title;
    this.product.image = this.tempProduct.image;
    this.product.price = this.tempProduct.price;
    this.router.navigate(['products']);
  }
  
  ngOnInit() {
  }

}
