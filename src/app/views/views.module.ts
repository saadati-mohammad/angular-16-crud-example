import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import {SharedModule} from "../shared/shared.module";
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    ViewHomeComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
