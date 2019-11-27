import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get('http://localhost:3000/groups');
  }
  getMessages(id) {
    let combine;
    if (id) {
      combine = '?groupid=' + id;
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
    let combine = "?userId=" + 1;
    return this.http.get('http://localhost:3000/usergroups' + combine);
  }

}
