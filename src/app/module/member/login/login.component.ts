import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginform: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  validateUser() {
    this.router.navigate(['home'])
  }

}
