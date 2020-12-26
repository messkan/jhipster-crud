import { IProduct } from 'app/shared/model/product.model';

export interface IStore {
  id?: number;
  name?: string;
  products?: IProduct[];
}

export class Store implements IStore {
  constructor(public id?: number, public name?: string, public products?: IProduct[]) {}
}
