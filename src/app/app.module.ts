import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './routerConfig';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/index';
import { UserService } from './_services/user.service';
import { JwtInterceptor } from './_helpers/index';
import { AlertService } from './_services/index';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentService } from './service/index';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DummyUserDBService } from './dummyUserDB.service';
import { appRoutes } from './routerConfig';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing
    // HttpClientInMemoryWebApiModule.forRoot(
    //   DummyUserDBService, {dataEncapsulation: false}
    // )    
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    StudentService,
    // providers used to create fake backend
    fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],//Http call get, put, post, delete
  bootstrap: [AppComponent] //To show the page on the first page
})
export class AppModule { }
