import {Component, Input, ElementRef, ViewChild} from '@angular/core';
import { Category } from '../../model/Category';
/**
 * Generated class for the ItemCategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-category',
  templateUrl: 'item-category.html'
})
export class ItemCategoryComponent {
  @ViewChild('card')
  card: ElementRef;
  @Input()
  category: Category;
  @Input()
  height: number = 100;

  constructor() {
    console.log('Component item-category', this.category);
  }

}
