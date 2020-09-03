import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCountryComponent } from './pages/home-country/home-country.component';
import { ListCountryComponent } from './pages/list-country/list-country.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeCountryComponent},
  { path: "countries", component: ListCountryComponent },
  { path: "detail", component: DetailCountryComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
