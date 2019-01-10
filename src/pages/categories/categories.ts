import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FakeData} from "../../viewmodel/FakeData";
import {Category} from "../../model/Category";
import {ProductsPage} from "../products/products";
import {Product} from "../../model/Product";

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: Array<Category>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.categories = FakeData.Categories;
  }

  itemClicked(item: Category) {
    console.log(item);
    let items: Array<Product> = FakeData.Products.filter((value, index) => value.categoryId == item.ID);
    this.navCtrl.push(ProductsPage, {'products' : items});
  }
}
