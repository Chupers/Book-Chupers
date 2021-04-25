import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details/details-page/details-page.component';
import { BecameHostComponent } from './host/became-host/became-host.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path:'homes', component:SearchResultComponent},
  { path:'details', component:DetailsPageComponent},
  { path:'became-host',component:BecameHostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
