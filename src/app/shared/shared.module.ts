import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { TabsComponent } from './tabs/tabs.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    DividerComponent,
    TabsComponent
  ],
  exports: [
    DividerComponent,
    TabsComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ]
})
export class SharedModule { }
