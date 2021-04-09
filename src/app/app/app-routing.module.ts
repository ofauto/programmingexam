import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayouthomeComponent} from './layout/layouthome/layouthome.component';
import {SearchComponent} from './search/search.component';
import {SearchdetailComponent} from './search/searchdetail/searchdetail.component';

const routes: Routes = [{
  path: '',
  component: LayouthomeComponent,
  // canActivate: [AuthGuard],
  children: [
    { path: '', component: SearchComponent},
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'searchdetail/:Id', component: SearchdetailComponent},
  ]
},
  {
    path: '*', redirectTo: ''
  },
  {
    path: '**', redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
