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

  //escuchador del evento click para el boton Share el cual se encuentra reenderizado en la vista principal
  share() {
    window.alert('The product has been shared!');
  }
  //escuchador del evento clic para el boton Notify Me el cual se reenderiza en la vista hija product-alerts.component.html. Los eventos de los hijos de escuchan en el padre segun la documentacion
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
