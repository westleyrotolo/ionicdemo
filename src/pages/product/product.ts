import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../model/Product";
import {PrestaRest} from "../../services/presta.service";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  product: Product = new Product();

  subscription: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _prestaRest: PrestaRest) {

  }

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    this._prestaRest.getProduct(id).subscribe(
      (_data) => {
        this.product = _data.products[0];
        this.product.description = this.product.description.replace(/<\/?[^>]+(>|$)/g, '');
        this.product.price = +this.product.price.toString().replace(/0{0,2}$/, "");

    },
    error => {
        console.log(error);
    });

  }
  ionViewDidLeave() {
    if (this.subscription != null)
      this.subscription.unsubscribe();
  }
}
