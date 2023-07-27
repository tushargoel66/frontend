import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HomeComponent } from '../component/home/home.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/admin/home', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
