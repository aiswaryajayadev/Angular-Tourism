import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DistrictIndPageComponent } from './pages/district-ind-page/district-ind-page.component';
import { DistrictListComponent } from './pages/district-list/district-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    
    { 
        path: '', component: HomeComponent
     },
     {
        path:'signin', component: SigninComponent
     },
     {
        path:'districtInd/:id', component: DistrictIndPageComponent
     },
     {
        path:'districtList', component: DistrictListComponent
     },
     {
        path:'login', component: LoginComponent
     }
];
