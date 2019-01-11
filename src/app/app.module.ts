import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CategoriesPage} from "../pages/categories/categories";
import {ProductPage} from "../pages/product/product";
import {ProductsPage} from "../pages/products/products";

import {IonicStorageModule } from "@ionic/storage";
import {PrestaConfiguration, PrestaModule, PrestaService} from "angular2-presta";
import {PrestaRest} from "../services/presta.service";

export const prestaConfiguration: PrestaConfiguration = {
  apiKey: 'IREGDXLEJPTAU2ADGUQN1XQ1L1KIX1HZ',
  imageApiKey: 'IREGDXLEJPTAU2ADGUQN1XQ1L1KIX1HZ', // ApiKey only with images GET permissions for security reasons
  shopUrl: 'http://insuredshipping.prestashoplab.com/api/'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    ProductPage,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PrestaRest,
    PrestaModule.forRoot(prestaConfiguration)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    ProductPage,
    ProductsPage
  ],
  providers: [
    PrestaService,
    StatusBar,
    SplashScreen,
    PrestaRest,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
