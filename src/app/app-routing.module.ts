import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
