import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel';
import { ItemCategoryComponent } from './item-category/item-category';
import {PrestaImageComponent} from "angular2-presta";
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import { ItemProductComponent } from './item-product/item-product';

@NgModule({
	declarations: [
    CarouselComponent,
    ItemCategoryComponent,
  PrestaImageComponent,
    ItemProductComponent],
	imports: [IonicModule, BrowserModule],
	exports: [
    CarouselComponent,
    ItemCategoryComponent,
  PrestaImageComponent,
    ItemProductComponent]
})
export class ComponentsModule {}
