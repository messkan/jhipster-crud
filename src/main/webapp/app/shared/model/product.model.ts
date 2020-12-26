import { IStore } from 'app/shared/model/store.model';
import { ICategory } from 'app/shared/model/category.model';

export interface IProduct {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  store?: IStore;
  category?: ICategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public price?: number,
    public quantity?: number,
    public store?: IStore,
    public category?: ICategory
  ) {}
}
