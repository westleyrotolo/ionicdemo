export class Category {
  id: number;
  name: string;
  description: string;
  id_parent : number;
  level_path: number;
  id_default_image : string;
  associations:{products: Array<{id:number}>};

  constructor() {
  }
}
