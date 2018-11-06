import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: 'comicstore',
    pathMatch: 'full',
    redirectTo: 'comicstore/comics',
    }, {
    path: 'comicstore/comics',
    loadChildren: './comic/comic.module#ComicModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
