import { Component, OnInit } from '@angular/core';
import {Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private username;
  constructor(private router:Router) { }

  ngOnInit() {
    this.getUserName();
  }
  getUserName() {
    this.username = JSON.parse(sessionStorage.getItem('userdetails'))[0].username;
  }
  clearUserSession() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
