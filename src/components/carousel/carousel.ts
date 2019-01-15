import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../../model/Category";

/**
 * Generated class for the CarouselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'carousel',
  templateUrl: 'carousel.html'
})
export class CarouselComponent {

  @Input()
  categories: Category[];

  @Output() categoryClicked: EventEmitter<Category> = new EventEmitter<Category>();

  categoryClick(c: Category) {
    console.log(c);
    this.categoryClicked.emit(c);
  }
  constructor() {
  }

}
