import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccommodationService } from 'src/app/shared/accommodation.service';
import { SecurityService } from 'src/app/shared/security.service';

@Component({
  selector: 'app-became-host',
  templateUrl: './became-host.component.html',
  styleUrls: ['./became-host.component.css']
})
export class BecameHostComponent implements OnInit {

  hostForm:FormGroup

  constructor( private _formBuilder: FormBuilder,
    private accommodationService:AccommodationService,
    private securityService : SecurityService,
    private _router: Router) {
    this.hostForm  =  this._formBuilder.group({
      name: ['', Validators.required],
      type:['',Validators.required]
  });
  }
  ngOnInit(): void {
  }

  submit(){
    if(this.securityService.isLoggedIn()){
      this.accommodationService.initAccommodation(this.hostForm.controls["name"].value,this.hostForm.controls["type"].value).subscribe(res =>{
        this._router.navigate(["/host-home"])
      })
    }
  }

  houseTypes: HouseType[] = [
    {value: "FLAT", viewValue: 'Flat'},
    {value: 'HOUSE', viewValue: 'House'}
  ];
}

interface HouseType {
  value: string;
  viewValue: string;
}
