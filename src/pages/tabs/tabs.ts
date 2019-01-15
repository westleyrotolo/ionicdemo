import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListPage} from "../list/list";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabHome: any;
  tabNotification: any;
  tabSettings: any;
  tabList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabHome = HomePage;
    this.tabList = ListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
