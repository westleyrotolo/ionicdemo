import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ScrollEvent} from 'ionic-angular';
import {Category} from "../../model/Category";
import {Product} from "../../model/Product";
import {PrestaRest} from "../../services/presta.service";
import {ProductPage} from "../product/product";
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

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
  changeDetection: ChangeDetectionStrategy.Default
})
export class CategoriesPage {
  products : Array<Product>;
  categories: Array<Category>;
  subscription: any;
  subscriptionProducts: any;
  category_id : number ;
  offsetY: number =0;
  heightSlider: number = 50;
  heightSlide : number = 150;
  offsetYTrans: string = 'translateY(0)';
  offsetY2: any = 'translate3d(0,0,0)';
  parallax_styles: object;
  constructor(private ref: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, private _prestaRest: PrestaRest, private _sanitizer:DomSanitizer) {
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
    this.ref.detectChanges();
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

  MAXSCROLL: number =  220 ;
  scrollHandler($event) {
    console.log($event);
    let temp = this.offsetY * (-1) /this.MAXSCROLL;
   this.offsetY =-Math.min($event.scrollTop*.56, this.MAXSCROLL);
   this.opacityCarousel = Math.min(temp, .99);
   this.heightSlide =150- temp * 100;
   console.log(this.heightSlide);
   console.log(this.opacityCarousel);
    console.log(this.offsetY);
    this.ref.detectChanges();
  }
  opacityCarousel: number;
}
