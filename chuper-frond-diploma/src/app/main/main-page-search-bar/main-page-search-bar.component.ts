import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-search-bar',
  templateUrl: './main-page-search-bar.component.html',
  styleUrls: ['./main-page-search-bar.component.css']
})
export class MainPageSearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,private _router: Router) {
    this.searchForm  =  this._formBuilder.group({
      placeToGo: ['', Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
  });
  }

  ngOnInit(): void {
    
  }

  submit(){
    this._router.navigate(['/search',this.searchForm.controls["placeToGo"].value])
  }

}
