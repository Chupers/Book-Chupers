import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page-search-bar',
  templateUrl: './main-page-search-bar.component.html',
  styleUrls: ['./main-page-search-bar.component.css']
})
export class MainPageSearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor( private _formBuilder: FormBuilder) {
    this.searchForm  =  this._formBuilder.group({
      placeToGo: ['', Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
  });
  }

  ngOnInit(): void {
    
  }

}
