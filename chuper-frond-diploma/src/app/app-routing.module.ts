import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DetailsPageComponent } from './details/details-page/details-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BecameHostComponent } from './host/became-host/became-host.component';
import { HostHomePageComponent } from './host/host-home-page/host-home-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path:'search/:search', component:SearchResultComponent},
  { path:'details/:id', component:DetailsPageComponent},
  { path:'became-host',component:BecameHostComponent},
  { path:'host-home',component:HostHomePageComponent},
  { path:'account',component:AccountComponent},
  { path:'favorite', component:FavoriteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
