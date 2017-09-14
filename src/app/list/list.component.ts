import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[];
  constructor(private _productService: ProductService) {
    this.showAllProducts();
   }

  showAllProducts() {
    console.log('show all products');
    this._productService.getProductList(
      (productList: Product[]) => {
        this.products = productList;
      }
    );
  }

  deleteProduct(id) {
    console.log('deleting product ' + id);
    this._productService.removeProductById(id);
  }

  ngOnInit() {
  }

}
