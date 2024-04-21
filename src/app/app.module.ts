import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ElementsModule} from "./elements/elements.module";
import {CollectionsModule} from "./collections/collections.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    // ElementsModule,
    // CollectionsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
