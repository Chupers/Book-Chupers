import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Accommodation } from '../entity/Accommodation';
import { AccommodationService } from '../shared/accommodation.service';
import { SecurityService } from '../shared/security.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../dialog/login/login.component';
declare var require: any

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  accommodations : Accommodation[] = []

  searchForm: FormGroup;
  
  houseTypes: HouseType[] = [
    {value: "FLAT", viewValue: 'Flat'},
    {value: 'HOUSE', viewValue: 'House'}
  ];
  
  selectedType = this.houseTypes[0]
  constructor(private _router: Router,
    private _route:ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _accommodationService : AccommodationService,
    private _loginServie : SecurityService,
    private dialog : MatDialog) {
      
      this.searchForm  =  this._formBuilder.group({
        placeToGo: ['', Validators.required],
        startDate:['',Validators.required],
        endDate:['',Validators.required],
        type:['',Validators.required],
        priceMin:['',Validators.required],
        priceMax:['',Validators.required],
    });
      let value:string = this._route.snapshot.paramMap.get('search')!
      _accommodationService.findBySubString(value).subscribe(data =>{
        this.accommodations = data
        console.log(this.accommodations)
      })
  }
  
  getFirstImage(photo: string[]){
    return photo[0];
  }
  formatDate(date:string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [month,day,year].join('.');
}

  markFavorite(item:Accommodation){
    if(this._loginServie.isLoggedIn()){
    this._accommodationService.markFavorite(item.accommodationId).subscribe(data=>{
      item.favorite = data.favorite
    })
  }
  else{
    const dialogRef = this.dialog.open(LoginComponent)
  }
  }
  

  submit(){
    console.log(this.searchForm.controls["type"].value);
    this._accommodationService.search(this.formatDate(this.searchForm.controls['startDate'].value),
    this.formatDate(this.searchForm.controls['endDate'].value),
    this.searchForm.controls["priceMin"].value,
    this.searchForm.controls["priceMax"].value,
    this.searchForm.controls["placeToGo"].value,
    this.searchForm.controls["type"].value,
    ).subscribe(data=>{
      this.accommodations = data
    })
    
  }

  navigateDetails(id:number){
    this._router.navigate(['/details',id])
  }

  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [27.4700509,53.8786856],
    zoom : 14
    });

  }
}
interface HouseType {
  value: string;
  viewValue: string;
}

