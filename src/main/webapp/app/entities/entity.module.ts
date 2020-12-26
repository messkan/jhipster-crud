import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then(m => m.TpStoreModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.TpProductModule),
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.TpCategoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TpEntityModule {}
