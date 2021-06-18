import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-recommendation-by-city',
  templateUrl: './main-page-recommendation-by-city.component.html',
  styleUrls: ['./main-page-recommendation-by-city.component.css']
})
export class MainPageRecommendationByCityComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  select(value:string){
    this._router.navigate(['/search',value])
  }

  
  cityList : string[] = ["Minsk","Brest","Gomel","Grodno","Mogilev","London","Barselona","Paris","Tokio","Vankuver"]
}
