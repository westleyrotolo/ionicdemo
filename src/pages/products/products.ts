import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../model/Product";
import {ProductPage} from "../product/product";

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  Products: Array<Product>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Products = navParams.get('products');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    console.log(this.Products);
  }

  itemClicked(product: Product) {
    this.navCtrl.push(ProductPage , {'product' : product});
  }
}
