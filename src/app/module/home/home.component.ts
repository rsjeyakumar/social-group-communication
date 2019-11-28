import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IGroup } from '../../http.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  getGroupId: number;
  getGroupName: string;
  getUserId: number;
  addmessage: FormGroup;
  jointhisGroup;
  joingrouplist;
  groups;
  getSessionvalue;
  grouplist;
  messages;
  userDetails;
  placeholder: string;
  constructor(private http: HttpService, private messageService: MessageService) { }

  ngOnInit() {
    this.getSessionvalue = JSON.parse(sessionStorage.getItem('userdetails'))[0];
    this.getUserId = this.getSessionvalue.id;
    this.addmessage = new FormGroup({
      message: new FormControl('', [Validators.required]),
      groupid: new FormControl(this.getGroupId),
      userid: new FormControl(this.getSessionvalue.id),
      username: new FormControl(this.getSessionvalue.username)
    });
    this.getUserGroups();
    this.http.getGroups().subscribe(res => {
      this.grouplist = res;
      this.filterGroups();
    });
  }
  addMessage() {
    this.http.postMessages(this.addmessage.value).subscribe(res => {
      this.addmessage.reset();
      this.getGroupMessage(this.getGroupId);
    });
  }
  handleChange(id, name) {
    this.getGroupId = id;
    this.getGroupName = name;
    this.addmessage.patchValue({
      groupid: this.getGroupId
    });
    this.getGroupMessage(this.getGroupId);
  }
  getUserGroups() {
    this.http.gerUserGroups(this.getUserId).subscribe(res => {
      this.groups = res;
      const response = res as object[];
      if (response.length) {
        this.getGroupName = this.groups[0].name;
        this.getGroupId = this.groups[0].groupId;
        this.addmessage.patchValue({
          groupid: this.getGroupId
        });
        this.getGroupMessage(this.getGroupId);
      }

    });
  }

  getGroupMessage(id) {
    this.http.getMessages(id).subscribe(res => {
      this.messages = res;
    });
  }
  joinGroup(group: IGroup): void {

    this.jointhisGroup = {};
    this.jointhisGroup.name = group.name;
    this.jointhisGroup.userId = this.getUserId;
    this.jointhisGroup.groupId = group.id;
    this.messageService.clear();

    this.messageService.add({
      key: 'c', sticky: true,
      severity: 'warn',
      summary: 'Are you sure want to Join this group?',
      detail: 'Confirm to proceed'
    });
    // this.http.joinGroup(userGroup).subscribe(res => {
    //   console.log(res);
    // });
  }
  onConfirm() {
    this.messageService.clear('c');
    this.http.joinGroup(this.jointhisGroup).subscribe(res => {
      console.log(res);
    });
  }
  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }

  filterGroups() {
    if (this.groups && this.groups.length) {
      this.groups.forEach(element => {
        const groupid = this.grouplist.findIndex(x => x.id === element.groupId);
        this.grouplist.splice(groupid, 1);
      });
    }
  }




}
