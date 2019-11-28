import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginform: FormGroup;
  private registerforminput: FormGroup;
  private loginvalidation = false;
  displayRegiserForm = false;
  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.registerforminput = new FormGroup({
      username: new FormControl('', [Validators.required]),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  validateUser() {


    const queryParams = '?usearname=' + this.loginform.value.username + '&password=' + this.loginform.value.password;
    this.http.userValidation(queryParams).subscribe((res) => {
      const response = res as object[];
      if (response.length === 1) {
        this.loginvalidation = false;
        sessionStorage.setItem('userdetails', JSON.stringify(response));
        this.router.navigate(['home']);
      } else {
        this.loginvalidation = true;
      }

    });

  }
  registerForm() {
    this.displayRegiserForm = true;
  }
  registerSubmit() {
    this.http.registerUser(this.registerforminput.value).subscribe(res => {
      console.log(res);
    });
  }

}
