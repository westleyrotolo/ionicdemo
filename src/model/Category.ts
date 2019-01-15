export class Category {
  id: number;
  name: string;
  description: string;
  id_parent : number;
  level_path: number;
  associations:{products: Array<{id:number}>};

  constructor() {
  }
}
