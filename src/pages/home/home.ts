import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {CategoriesPage} from "../categories/categories";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  testNavigation($event: MouseEvent) {

    this.navCtrl.push( CategoriesPage );
  }
}
