import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styles: [
    `
      img {
        width: 90px;
        height: 70px;
      }
    `,
  ],
})
export class HeaderAuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
