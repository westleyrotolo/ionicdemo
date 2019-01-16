import {Component, Input} from '@angular/core';
import {Product} from "../../model/Product";

/**
 * Generated class for the ItemProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-product',
  templateUrl: 'item-product.html'
})
export class ItemProductComponent {

  @Input()
  product: Product;

  constructor() {
  }

}
