import { Component } from '@angular/core';

//importacion del array con la informacion de los productos
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //exportamos a la vista la variable products la cual importamos
  //desde el archivo ../products.ts
  //products: array con la informacion importada
  //product: variable local la cual vamos a exportar y la cual recibe
  //el array de la variable products importada desde el archivo ../products.ts
  product = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/