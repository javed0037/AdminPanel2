import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ForgetPasswordComponent } from './shared/forget-password/forget-password.component';


const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }, 
    {
      path: ''
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  
    {
      path: 'ddddd',
      component: ForgetPasswordComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

