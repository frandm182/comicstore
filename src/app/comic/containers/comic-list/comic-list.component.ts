import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-comic-list',
  template: `
    <app-comics [comics]="comics"></app-comics>
  `,
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  public comics: Comic[] = [];

  constructor(private service: ComicService) { }

  ngOnInit() {
    this.service.getComics()
      .subscribe(res => this.comics = res);
  }

}
