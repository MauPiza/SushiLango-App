import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name: string = 'Mauricio Baños Piza';
  username: string = '@userexample';
  constructor() {}

  ngOnInit(): void {}
}
