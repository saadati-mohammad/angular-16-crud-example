import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  isDisabled: boolean | undefined= undefined;
  @Input() title: string = "";

  @ViewChild('content', {read: ElementRef, static: true}) set content(c: ElementRef) {
    this.isDisabled = !c?.nativeElement?.innerHTML;
  };

}
