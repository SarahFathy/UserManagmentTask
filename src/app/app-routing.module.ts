import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';
//import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';

export const routes: Routes = [
  {

    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // { path: '', component: UsersComponent, pathMatch: 'full' },
  {
    path: 'list-user', component: UsersComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'add-user', component: AddUserComponent,
    canActivate: [AuthGuard], data: {
      roles: ['Admin']
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }  