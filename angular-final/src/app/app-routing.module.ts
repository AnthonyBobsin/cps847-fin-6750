import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HourlyComponent } from "./components/hourly/hourly.component";

const routes: Routes = [
  { path: '', redirectTo: '/hourly', pathMatch: 'full' },
  { path: 'hourly', component:HourlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
