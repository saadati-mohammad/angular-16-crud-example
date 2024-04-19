import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ElementsHomeComponent} from "../elements/elements-home/elements-home.component";
import {CollectionsHomeComponent} from "./collections-home/collections-home.component";

const routes: Routes = [
  {path: 'collections', component: CollectionsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
