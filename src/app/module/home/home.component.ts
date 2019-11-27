import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  grouplist;
  messages;
  getGroupId: number;
  userDetails = [
    {
      name: 'jeyakumar',
      password: 'jey',
      id: 2
    }
  ];
  getUserId: number;
  addmessage: FormGroup;
  groups;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getUserId = 1;
    this.addmessage = new FormGroup({
      message: new FormControl('', [Validators.required]),
      groupid: new FormControl(this.getGroupId),
      userid: new FormControl(this.getUserId)
    });
    this.getUserGroups();
    this.http.getGroups().subscribe(res => {
      this.grouplist = res;
    });
  }
  addMessage() {
    this.http.postMessages(this.addmessage.value).subscribe(res => {
      console.log(res);
    });
  }
  handleChange(ev) {
    this.getGroupId = this.groups[ev.index].groupId;
    this.getGroupMessage(this.getGroupId);
  }
  getUserGroups() {
    this.http.gerUserGroups(this.getUserId).subscribe(res => {
      this.groups = res;
      this.getGroupId = this.groups[0].id;
      this.addmessage.patchValue({
        groupid: this.getGroupId
      });
      this.getGroupMessage(this.getGroupId);
    });
  }

  getGroupMessage(id) {
    this.http.getMessages(id).subscribe(res => {
      this.messages = res;
    });
  }
  joinGroup(group) {
    debugger;
    // "name": "UI",
    //   "userId": 1,
    //   "groupId": 1,
    //   "id": 1
    let userGroup = {};
    userGroup.name = group.name;
    userGroup.userId = this.getUserId;
    userGroup.groupId = group.id;   
    this.http.joinGroup(userGroup).subscribe(res => {
      console.log(res);
    });
  }

}
