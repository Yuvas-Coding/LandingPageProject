import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { registerLocaleData } from '@angular/common';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [{
  path:'',
  component:LoginPageComponent
},
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'register',
  component: RegisterPageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
