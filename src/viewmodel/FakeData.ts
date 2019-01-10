import {Category} from "../model/Category";
import {Product} from "../model/Product";
import {Test} from "../model/Test";

export class FakeData {
  static Categories: Category[] = [
    new Category(1, 'cat1',''),
    new Category(2, 'cat2',''),
    new Category(3, 'cat3',''),
    new Category(4, 'cat4',''),
    new Category(5, 'cat5',''),
  ];
  static Products: Product[] = [
    new Product(1,'pr1', 1,'assets/imgs/img.png',10),
    new Product(2,'pr2', 2,'',10),
    new Product(3,'pr3', 1,'',10),
    new Product(4,'pr4', 3,'',10),
    new Product(5,'pr5', 2,'',10),
    new Product(6,'pr6', 4,'',10),
  ];
  static Tests: Array<Test> = [
    {
      Prop1: '',
      Prop2: ''
    }
  ];

}
