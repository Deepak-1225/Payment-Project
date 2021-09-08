import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransferComponent } from './transfer/transfer.component';
const routes: Routes = [

  
  { path : 'transfer', component:TransferComponent  },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  
  { path: 'check', loadChildren: () => import('./check/check.module').then(m => m.CheckModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 
 }
