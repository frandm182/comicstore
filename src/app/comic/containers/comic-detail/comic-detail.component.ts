import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-comic-detail',
  template: `
   <app-comic [comic]="comic"></app-comic>
  `,
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  public comic: Comic = new Comic();
  constructor(
    private route: ActivatedRoute,
    private service: ComicService
  ) { }

  ngOnInit() {
    this.service.getComic(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => this.comic = res);
  }
}
