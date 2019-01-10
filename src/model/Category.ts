export class Category {
  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  constructor(ID: number, label: string, icon: string) {
    this._ID = ID;
    this._label = label;
    this._icon = icon;
  }


  get icon(): string {
    return this._icon;
  }
  set icon(value: string) {
  this._icon = value;
  }

  private _ID: number;
  private _label: string;
  private _icon: string;
}
