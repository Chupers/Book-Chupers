import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-became-host',
  templateUrl: './became-host.component.html',
  styleUrls: ['./became-host.component.css']
})
export class BecameHostComponent implements OnInit {

  hostForm:FormGroup

  constructor( private _formBuilder: FormBuilder) {
    this.hostForm  =  this._formBuilder.group({
      placeToGo: ['', Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
  });
  }
  ngOnInit(): void {
  }

  houseTypes: HouseType[] = [
    {value: "FLAT", viewValue: 'Flat'},
    {value: 'HOUSE', viewValue: 'Pizza'}
  ];
}

interface HouseType {
  value: string;
  viewValue: string;
}
