import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  searchForm: FormGroup;
  availabilityCheck:Boolean = false

  constructor(private _formBuilder: FormBuilder) {
    this.searchForm  =  this._formBuilder.group({
      placeToGo: ['', Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
  });
   }

  ngOnInit(): void {
  }

  checkAvailability(){
    this.availabilityCheck = true
    console.log(this.availabilityCheck)
  }

}
