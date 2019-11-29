import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { User, Groups, Messages, Usergroups } from './model/appmodel';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get<Groups[]>('http://localhost:3000/groups');
  }
  getMessages(id) {
    let combine;
    if (id) {
      combine = '?groupid=' + id;
    } else {
      combine = '';
    }
    return this.http.get<Messages[]>('http://localhost:3000/messages' + combine);
  }
  postMessages(data) {
    return this.http.post<Messages>('http://localhost:3000/messages', data);
  }
  joinGroup(data) {
    return this.http.post<Usergroups>('http://localhost:3000/usergroups', data);
  }
  gerUserGroups(id) {
    const combine = '?userId=' + id;
    return this.http.get<Usergroups[]>('http://localhost:3000/usergroups' + combine);
  }
  registerUser(data) {
    return this.http.post<User>('http://localhost:3000/user', data);
  }
  userValidation(queryparams) {
    return this.http.get<User>('http://localhost:3000/user' + queryparams);
  }

}
