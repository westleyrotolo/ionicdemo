import {Component, OnDestroy, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {Observable} from "rxjs";
import {PrestaQuery, PrestaService} from "angular2-presta";
import {PrestaRest} from "../services/presta.service";
import {Category} from "../model/Category";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements  OnDestroy{
  @ViewChild(Nav) nav: Nav;
  Categories: Array<Category>;
  // store subscription to presta webservice so we can unsuscribe later
  subscription: any;

  // List of products

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private _prestaRest: PrestaRest) {
    this.initializeApp();

    console.log(platform);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];





  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component) ;
    //this.nav.setRoot(page.component);
  }

  ngOnDestroy(): void {
  //  this.subscription.unsuscribe();
  }
}
