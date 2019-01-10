export class Product {
  constructor(ID: number, name: string, categoryId: number, image: string, price: number) {
    this._ID = ID;
    this._name = name;
    this._categoryId = categoryId;
    this._image = image;
    this._price = price;
  }
  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
  private _ID: number;
  private _name: string;
  private _categoryId: number;
  private _image: string;
  private _price: number;

}
