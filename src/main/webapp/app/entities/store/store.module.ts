import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TpSharedModule } from 'app/shared/shared.module';
import { StoreComponent } from './store.component';
import { StoreDetailComponent } from './store-detail.component';
import { StoreUpdateComponent } from './store-update.component';
import { StoreDeleteDialogComponent } from './store-delete-dialog.component';
import { storeRoute } from './store.route';

@NgModule({
  imports: [TpSharedModule, RouterModule.forChild(storeRoute)],
  declarations: [StoreComponent, StoreDetailComponent, StoreUpdateComponent, StoreDeleteDialogComponent],
  entryComponents: [StoreDeleteDialogComponent],
})
export class TpStoreModule {}
