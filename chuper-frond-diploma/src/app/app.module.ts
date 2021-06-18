import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { MainPageHeaderComponent } from './main/main-page-header/main-page-header.component';
import { MainPageSearchBarComponent } from './main/main-page-search-bar/main-page-search-bar.component';
import { MainPageRecommendationByCityComponent } from './main/main-page-recommendation-by-city/main-page-recommendation-by-city.component';
import { MainPageRecommendationByCategoryComponent } from './main/main-page-recommendation-by-category/main-page-recommendation-by-category.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailsPageComponent } from './details/details-page/details-page.component';
import { PageHeaderComponent } from './details/page-header/page-header.component';
import { BecameHostComponent } from './host/became-host/became-host.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './dialog/login/login.component';
import { RegistationComponent } from './dialog/registation/registation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TokenInterceptor } from './TokenInterceptor';
import { HostHomePageComponent } from './host/host-home-page/host-home-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from './account/account.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageHeaderComponent,
    MainPageSearchBarComponent,
    MainPageRecommendationByCityComponent,
    MainPageRecommendationByCategoryComponent,
    FooterComponent,
    SearchResultComponent,
    DetailsPageComponent,
    PageHeaderComponent,
    BecameHostComponent,
    LoginComponent,
    RegistationComponent,
    HostHomePageComponent,
    AccountComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
  ],

  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
