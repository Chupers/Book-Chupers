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
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageHeaderComponent,
    MainPageSearchBarComponent,
    MainPageRecommendationByCityComponent,
    MainPageRecommendationByCategoryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
