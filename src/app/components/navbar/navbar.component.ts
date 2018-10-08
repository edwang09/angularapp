import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showRegister: boolean;
  sidebar: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleSlideMenu(){
    this.sidebar=!this.sidebar
  }
}
