import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TpSharedModule } from 'app/shared/shared.module';
import { TpCoreModule } from 'app/core/core.module';
import { TpAppRoutingModule } from './app-routing.module';
import { TpHomeModule } from './home/home.module';
import { TpEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TpSharedModule,
    TpCoreModule,
    TpHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TpEntityModule,
    TpAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TpAppModule {}
