import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IGroup {
  name: string;
  desc: string;
  id: number;

}


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  getGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>('http://localhost:3000/groups');
  }
  getMessages(id) {
    let combine;
    if (id) {
      combine = '?groupid=' + id;
    } else {
      combine = '';
    }
    return this.http.get('http://localhost:3000/messages' + combine);
  }
  postMessages(data) {
    return this.http.post('http://localhost:3000/messages', data);
  }
  joinGroup(data) {
    return this.http.post('http://localhost:3000/usergroups', data);
  }
  gerUserGroups(id) {
    const combine = '?userId=' + id;
    return this.http.get('http://localhost:3000/usergroups' + combine);
  }
  registerUser(data) {
    return this.http.post('http://localhost:3000/user', data);
  }
  userValidation(queryparams) {
    return this.http.get('http://localhost:3000/user' + queryparams);
  }

}
