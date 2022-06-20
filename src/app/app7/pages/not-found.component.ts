import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found">Not-found</div>
  `,
  styles: [`
    .not-found { font-size: 2em; padding: 60px; }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
