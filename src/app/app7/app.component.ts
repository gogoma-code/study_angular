import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h1.h1-item-gubun { font-style: bold; background-color: gray; margin-top: 30px; }
    nav {
      height: 60px;
      background-color: #4a4c88;
    }
    nav > a {
      line-height: 60px;
      margin: 0 30px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
    nav > a:hover, nav > a.active  {
      opacity: 1.0;
    }
  `]
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoTodos() {
    // /todos로 이동
    this.router.navigate(['todos']);
  }
}
