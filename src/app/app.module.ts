import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';
import { UsersService } from './_services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MaterialModule } from './shared/material.module';
// import { MatTableModule } from '@angular/material';

import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatSortModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    AdminComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
