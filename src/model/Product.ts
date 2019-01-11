export class Product {
  id: number;
  name: string;
  description: string;
  description_short: string;
  price: number;
  quantity: number;
  id_default_image: number;
  id_default_category: number;
  id_parent: number;
  level_depth: number;
  associations:{images: Array<{id:number}>, categories: Array<{id: number}>};
}
