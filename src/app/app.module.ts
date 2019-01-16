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
import {TabsPage} from "../pages/tabs/tabs";
import {ComponentsModule} from "../components/components.module";
import {ItemCategoryComponent} from "../components/item-category/item-category";
import {CarouselComponent} from "../components/carousel/carousel";
import {ItemProductComponent} from "../components/item-product/item-product";

export const prestaConfiguration: PrestaConfiguration = {
  apiKey: 'IREGDXLEJPTAU2ADGUQN1XQ1L1KIX1HZ',
  imageApiKey: 'IREGDXLEJPTAU2ADGUQN1XQ1L1KIX1HZ', // ApiKey only with images GET permissions for security reasons
  shopUrl: 'api/'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    ProductPage,
    ProductsPage,
    TabsPage,
    ItemCategoryComponent,
    CarouselComponent,
    ItemProductComponent
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
    ProductsPage,
    TabsPage,
    ItemCategoryComponent,
    CarouselComponent,
    ItemProductComponent,
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
