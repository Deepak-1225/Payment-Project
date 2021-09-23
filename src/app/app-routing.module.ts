import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

 
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },


  {path: 'login', component: LoginComponent},

 
  // { path: 'transaction', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 
 }
