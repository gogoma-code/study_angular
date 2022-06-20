import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  template: `
    <p>Customer Detail: ID {{ id }}</p>
  `,
  styles: [
  ]
})
export class CustomerDetailComponent implements OnInit {
  id: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = +params.get('id'));
  }

}
