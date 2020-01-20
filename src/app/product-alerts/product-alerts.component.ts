import { Component, OnInit } from '@angular/core';
//Import Input from @angular/core.
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

//@Component() decorator. This indicates that the following class is a component
@Component({
  //The selector identifies the component. The selector is the name you give the Angular component when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name
  selector: 'app-product-alerts',
  //The template and style filenames reference the HTML and CSS files that StackBlitz generates.
  templateUrl: './product-alerts.component.html',
  //The template and style filenames reference the HTML and CSS files that StackBlitz generates.
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  //The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;

  //notify: nombre de variable que le enviamos a la vista padre product-list.components.html. -> (notify)="onNotify()"

  //La recibimos de la vista product-alerts.component.html a traves del evento clic en el boton -> <button (click)="notify.emit()">Notify Me</button>
  
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
