import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
      <div class="navbar-text m-auto text-white">
      The comics and characters and everything else presented here belongs to DC Comics.
    </div>
    </nav>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
