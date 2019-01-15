import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel';
import { ItemCategoryComponent } from './item-category/item-category';
import {PrestaImageComponent} from "angular2-presta";
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [
    CarouselComponent,
    ItemCategoryComponent,
  PrestaImageComponent],
	imports: [IonicModule, BrowserModule],
	exports: [
    CarouselComponent,
    ItemCategoryComponent,
  PrestaImageComponent]
})
export class ComponentsModule {}
