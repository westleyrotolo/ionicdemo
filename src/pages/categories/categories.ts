import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Category} from "../../model/Category";
import {Product} from "../../model/Product";
import {PrestaRest} from "../../services/presta.service";
import {ProductPage} from "../product/product";

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
  products : Array<Product>;
  categories: Array<Category>;
  subscription: any;
  subscriptionProducts: any;
  category_id : number ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _prestaRest: PrestaRest) {
    this.category_id = this.navParams.get('id');

  }


  ionViewDidLoad() {
    const _p_id = this.navParams.get('p_id');
    this.categories = new Array<Category>();
    this.subscription = this._prestaRest.getCategories(this.category_id).subscribe(
      (_data) => {
        this.categories = _data.categories;
        console.log('subscription: ', _data);
        if (_p_id != null){
          this.subscriptionProducts = this._prestaRest.getProducts({id: _p_id}).subscribe(
            (_products) => {
              console.log('subscribtion: ', _products);
              if (_products.products != null) {
                _products.products.forEach(x => x.description_short = x.description_short.replace(/<\/?[^>]+(>|$)/g, ''));
                this.products = _products.products;
                console.log(this.products);
              }
            }
          );
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  ionViewDidLeave() {
    if (this.subscription!=null)
      this.subscription.unsubscribe();
    if (this.subscriptionProducts != null)
      this.subscriptionProducts.unsubscribe();
  }
  item() {

  }
  itemClicked(item: Category) {
    console.log(item);
    let p_id: string = '';
    item.associations.products.forEach((x)=> p_id+=''+x.id+'|');
    this.navCtrl.push( CategoriesPage, {'id': item.id, 'p_id' : p_id});

  }

  itemProductClicked(item: Product) {
    console.log('itemProductClicked');
    this.navCtrl.push( ProductPage , {id: item.id});

  }
}
