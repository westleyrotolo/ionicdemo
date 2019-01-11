import {Component, Input, ViewChild, OnInit, OnChanges, SimpleChanges, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {CategoriesPage} from "../categories/categories";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements  OnInit, OnChanges{
 text: string;

  imgURI: string = null;

  constructor(public navCtrl: NavController, private storage: Storage) {
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }


  testNavigation($event: MouseEvent) {


    this.navCtrl.push( CategoriesPage, {'id' : 2, 'p_id': '1|2|3|4|5|6!7'} );
  }


}
