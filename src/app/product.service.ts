import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Product[] = [];
  count = 0;
  constructor() { }

  addToProductList(product: Product) {
    console.log('adding to product list');
    this.count++;
    product.id = this.count;
    this.products.push(product);
    console.log(this.products);
  }

  getProductList(callback) {
    console.log('getting product list');
    callback(this.products);
  }

  getProductById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      const foundProduct = this.products.find(product => product.id === parseInt(id, 10));
      if (foundProduct) {
        return resolve(foundProduct);
      }
      reject(new Error(`Unable to find product with id ${ id }`));
    });
  }

  removeProductById(id) {
    const foundProductIndex = this.products.findIndex(product => product.id === parseInt(id, 10));
    console.log(foundProductIndex);
      this.products.splice(foundProductIndex, 1);
  }

}
