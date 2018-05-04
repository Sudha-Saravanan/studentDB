import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService, StudentService } from './service/index';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DummyUserDBService } from './dummyUserDB.service';
import { appRoutes } from './routerConfig';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DummyUserDBService, {dataEncapsulation: false}
    )    
  ],
  providers: [UserService, StudentService],//Http call get, put, post, delete
  bootstrap: [AppComponent] //To show the page on the first page
})
export class AppModule { }
