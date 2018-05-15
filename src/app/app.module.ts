import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './_helpers/index';


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
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing
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
    // providers used to create fake backend
    fakeBackendProvider,
  ],//Http call get, put, post, delete
  bootstrap: [AppComponent] //To show the page on the first page
})
export class AppModule { }
