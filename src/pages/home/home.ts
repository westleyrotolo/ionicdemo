import {Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {CategoriesPage} from "../categories/categories";
import { Storage } from '@ionic/storage';
import {Category} from "../../model/Category";
import {PrestaRest} from "../../services/presta.service";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements  OnInit, OnChanges{

  categories: Category[];
  subscription: any;
  constructor(public navCtrl: NavController, private storage: Storage, private _prestaRest: PrestaRest) {
  }
  ngOnInit() {
    this.subscription = this._prestaRest.getCategories(2).subscribe(
      (_data) => {
        this.categories = _data.categories;
        console.log('subscription: ', _data);
      },
      error => {
        console.log(error);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  itemClicked(item: Category) {
    console.log(item);
    let p_id: string = '';
    if (item.associations && item.associations.products)
        item.associations.products.forEach((x)=> p_id+=''+x.id+'|');
    this.navCtrl.push( CategoriesPage, {'id': item.id, 'p_id' : p_id});

  }

  ionViewDidLeave() {
    if (this.subscription != null)
      this.subscription.unsubscribe();
  }


  testNavigation($event: MouseEvent) {


    this.navCtrl.push( CategoriesPage, {'id' : 2, 'p_id': '1|2|3|4|5|6!7'} );
  }


}
