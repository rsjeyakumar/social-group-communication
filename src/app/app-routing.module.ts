import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/member/login/login.component';
import { HomeComponent } from './module/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './module/member/member.module#MemberModule'

  },
  {
    path: 'home',
    loadChildren: './module/home/home.module#HomeModule'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
