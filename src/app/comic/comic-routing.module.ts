import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicListComponent } from './containers/comic-list/comic-list.component';
import { ComicDetailComponent } from './containers/comic-detail/comic-detail.component';
import { ComicService } from './services/comic.service';

const routes: Routes = [{
  path: '',
  component: ComicListComponent,
}, {
  path: ':id',
  component: ComicDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ComicService]
})
export class ComicRoutingModule { }
