import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedataService } from '../../sharedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private router: Router, private shareddata: SharedataService) { }

  ngOnInit() {
    this.getUserName();
  }

  /*header menulist*/
  getHeaderMenu() {
    // this.shareddata.showMenu.subscribe(res => {
    //   this.menu = res;
    // })
  }

  /*get logged in user name*/
  getUserName() {
    if (JSON.parse(sessionStorage.getItem('userdetails'))) {
      this.username = JSON.parse(sessionStorage.getItem('userdetails'))[0].username;
    }

  }
  clearUserSession() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
