import {Component} from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {
  data = [
    {value: '12', label: '#of Users'},
    {value: '25', label: '#like'},
    {value: '34', label: '#comments'},
  ];

  items=[
    {image: '/assets/images/path.png',title: 'path', desc: 'A beautiful path'},
    {image: '/assets/images/tree.png',title: 'tree', desc: 'Old brown tree is antique'},
  ]
}
