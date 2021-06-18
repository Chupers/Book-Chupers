import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Accommodation } from '../entity/Accommodation';
import { AccommodationService } from '../shared/accommodation.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  accommodations : Accommodation[] = []
  
  constructor(private _router: Router,
    private _route:ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _accommodationService : AccommodationService) {
      _accommodationService.findFavorite().subscribe(data=>{
        this.accommodations = data;
      })
  }

  ngOnInit(): void {
  }
  getFirstImage(photo: string[]){
    return photo[0];
  }

  markFavorite(item:Accommodation){
    this._accommodationService.markFavorite(item.accommodationId).subscribe(data=>{
      item.favorite = data.favorite
    })
  }

  submit(){
    
  }

  navigateDetails(id:number){
    this._router.navigate(['/details',id])
  }

}
