import { IProduct } from 'app/shared/model/product.model';

export interface ICategory {
  id?: number;
  name?: string;
  products?: IProduct[];
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public products?: IProduct[]) {}
}
