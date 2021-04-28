import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cars: string[] = ['Audi R8', 'Lamborghini Aventador', 'Ferrari Barlinetta'];
  constructor() {}
  ngOnInit(): void {}
}
