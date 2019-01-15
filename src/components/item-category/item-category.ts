import {Component, Input} from '@angular/core';
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
  @Input()
  category: Category;
  text: string;

  constructor() {
    console.log('Component item-category', this.category);
  }

}
