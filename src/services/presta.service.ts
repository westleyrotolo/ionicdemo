import {PrestaQuery, PrestaService} from "angular2-presta";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {DisposableFn} from "@angular/core/src/view";
import {Injectable, NgModule} from "@angular/core";
@NgModule()
export class PrestaRest {


  prestaQuery(resource: string = '', limit: number = 10, orderby: string, orderasc: boolean = true,  display, filter?: any): PrestaQuery {
    return {
      // define resource products, categories ...
      // check full list http://doc.prestashop.com/display/PS16/Web+service+reference
      resource : resource,
      // return only fields you need
      display  : display,
      // filter results
      filter: filter,
      // sort results
      sort: `${orderby}_${orderasc ? 'ASC' : 'DESC'}`,
      // limit number of results or define range
      limit: limit.toString()
    };
  }
  getCategories(id_parent: number = 0, orderby: string = 'id', orderasc: boolean = true, limit: number = 100)
    : Observable<{categories: Category[]}> {

      return this._prestaService.get(this.prestaQuery(Resources.Categories, limit, orderby, orderasc, DisplayResources.Category, {id_parent : id_parent}));
  }

  getProducts( filter: any, orderby: string = 'id', orderasc: boolean = true, limit: number = 100): Observable<{products: Array<Product>}> {
      return this._prestaService.get(this.prestaQuery(Resources.Products, limit, orderby, orderasc, DisplayResources.ShortProduct, filter));
  }
  getProduct(id: number): Observable<{products: Array<Product>}> {
    return this._prestaService.get(this.prestaQuery(Resources.Products,1,'name',true,DisplayResources.Product, {id: id}));
  }
  constructor(private _prestaService: PrestaService) {

  }
}
enum Resources {
  Categories = 'categories',
  Products = 'products'
}
enum DisplayResources {
  Category = 'id,name,description,id_parent,level_depth,products[id]',
  Product = 'id,name,description,description_short,price,quantity,id_category_default,id_default_image,images[id],categories[id]',
  ShortProduct='id,name,description_short,price,id_default_image,id_category_default'
}
