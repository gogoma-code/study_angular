import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <div class="service">Service</div>
  `,
  styles: [`
    .service { font-size: 2em; padding: 60px; }
  `]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
