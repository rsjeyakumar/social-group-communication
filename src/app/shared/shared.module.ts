import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../shared/header/header.component';
import { SharedataService } from '../sharedata.service';

import { HttpService } from '../http.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [SharedataService, HttpService],
  exports: [HeaderComponent]
})
export class SharedModule { }
