import { Component, OnInit } from '@angular/core';
import { AccountMenuItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.css'],
})
export class InitPageComponent implements OnInit {
  menuItem: AccountMenuItem[] = [
    {
      icon: 'login',
      label: 'Iniciar sesión',
      route: '../auth',
    },
    {
      icon: 'switch_account',
      label: 'Cambiar cuenta',
    },
    {
      icon: 'logout',
      label: 'Cerrar sesión',
      route: '../auth',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
