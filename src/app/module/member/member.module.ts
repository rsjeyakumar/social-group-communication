import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MemberRoutingModule } from '../member/member-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class MemberModule { }
