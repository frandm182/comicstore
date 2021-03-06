import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics',
  template: `
    <div class="row">
    <div class="col-md-4 cl-lg-4 mb-3" *ngFor="let comic of comics">
      <app-comic [comic]="comic" [details]="false"></app-comic>
    </div>
  </div>`,
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  @Input() public comics: Comic[];
  constructor() { }

  ngOnInit() {
  }

}
