import {Component, ViewChild} from '@angular/core';
import {DividerComponent} from "../../shared/divider/divider.component";

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent {
  // @ViewChild(DividerComponent) divider: DividerComponent = new DividerComponent;
  // @ViewChild('dt') set divider(v: DividerComponent) {
  //     v.title = 'hello with viewChild';
  // }

  constructor() {
  }
}
