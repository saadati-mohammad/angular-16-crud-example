import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewHomeComponent} from "./view-home/view-home.component";
import {StatisticsComponent} from "./statistics/statistics.component";

const routes: Routes = [
  {path: '', component: ViewHomeComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
