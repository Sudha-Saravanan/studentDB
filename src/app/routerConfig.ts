import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';

export const appRoutes: Routes = [
    // { 
    //     path: 'home',
    //     component: HomeComponent
    // },

    { 
        path: 'login',
        component: LoginComponent
    },

    { 
        path: 'register',
        component: RegisterComponent
    },
    { 
        path: '',
        component: HomeComponent, canActivate: [AuthGuard]
    },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);