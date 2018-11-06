import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1{
      color: #0476F2;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
