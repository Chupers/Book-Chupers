import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Accommodation, AccommodationCharacteriscic } from 'src/app/entity/Accommodation';
import { RentalRecord } from 'src/app/entity/RentalRecord';
import { AccommodationService } from 'src/app/shared/accommodation.service';
import { RentslRecordService } from 'src/app/shared/rentsl-record.service';

@Component({
  selector: 'app-host-home-page',
  templateUrl: './host-home-page.component.html',
  styleUrls: ['./host-home-page.component.css']
})
export class HostHomePageComponent implements OnInit {

  basicInfoGroup: FormGroup
  accommodation : Accommodation = new Accommodation; 
  characteristics: AccommodationCharacteriscic[] = []
  NewAddCharacteristics: AccommodationCharacteriscic[] = []
  rentalRecords:RentalRecord[] = []
  displayedColumns: string[] = ['Name','CheckIn', 'CheckOut','Status'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<RentalRecord>;

  constructor(private accommodationService: AccommodationService,
    private _formBuilder: FormBuilder,
    private _rentalService: RentslRecordService) { 
    this.basicInfoGroup  =  this._formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      description:['',Validators.required],
      guestCount:['',Validators.required],
      roomCount:['',Validators.required],
      bedCount:['',Validators.required],
      pricePerDay:['',Validators.required],
      characteriscit:['',Validators.required],
      icon:['',Validators.required],
  });

  this.accommodationService.getActiveAccommodation().subscribe(data=>{
    this.accommodation = data
    this.characteristics = this.accommodation.accommodationCharacteristicList
    console.log(this.accommodation);
    this.basicInfoGroup.controls["country"].setValue(this.accommodation.accommodationInfo.country);
      this.basicInfoGroup.controls["name"].setValue(this.accommodation.accommodationInfo.name);
      this.basicInfoGroup.controls["city"].setValue(this.accommodation.accommodationInfo.city);
      this.basicInfoGroup.controls["street"].setValue(this.accommodation.accommodationInfo.address);
      this.basicInfoGroup.controls["description"].setValue(this.accommodation.accommodationInfo.description);
      this.basicInfoGroup.controls["guestCount"].setValue(this.accommodation.accommodationInfo.guestCount);
      this.basicInfoGroup.controls["roomCount"].setValue(this.accommodation.accommodationInfo.roomCount);
      this.basicInfoGroup.controls["bedCount"].setValue(this.accommodation.accommodationInfo.bedCount);
      this.basicInfoGroup.controls["pricePerDay"].setValue(this.accommodation.accommodationInfo.pricePerDay);
  })

  this._rentalService.getRecordByAccommodation().subscribe(data=>{
    this.rentalRecords = data
    this.dataSource = new MatTableDataSource(this.rentalRecords);
  })
  }

  confirm(id: number){
    this._rentalService.confirm(id).subscribe(
      data=>{
        console.log("confirm");
      }
    );
  }

  ngOnInit(): void {
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  onFileChanged(event: any){
    this.selectedFile = event.target.files[0];
    this.onUpload()
  }
  onUpload(){
    this.accommodationService.loadImageByFile(this.selectedFile,this.accommodation.accommodationId).subscribe((data: any) =>{
      this.accommodation = data;
    })
  }

  
  getImage(id:number):string{
    let image : string = this.accommodation.accommodationInfo.photo[id] ?? "https://i2.wp.com/www.fitnessadrenaline.com/wp-content/uploads/2015/12/placeholder-6.jpg?fit=2000%2C1500&ssl=1";
    console.log(image)
      return image
    
  }
  addCharacterisctic(){
      let char = new AccommodationCharacteriscic(
      this.basicInfoGroup.controls["icon"].value,
      this.basicInfoGroup.controls["characteriscit"].value
    )
    this.characteristics.push(char)
    this.accommodationService.addCharacteristic(this.accommodation.accommodationId,char.characteristicText,char.iconName).subscribe(data=>{
      console.log(data);
      
    })
  }
  selectedFile!: File;
  submit(){
    this.accommodationService.updateBasicInfo(
      this.basicInfoGroup.controls["country"].value,
      this.basicInfoGroup.controls["name"].value,
      this.basicInfoGroup.controls["city"].value,
      this.basicInfoGroup.controls["street"].value,
      this.basicInfoGroup.controls["description"].value,
      this.basicInfoGroup.controls["guestCount"].value,
      this.basicInfoGroup.controls["roomCount"].value,
      this.basicInfoGroup.controls["bedCount"].value,
      this.basicInfoGroup.controls["pricePerDay"].value).subscribe(data=>{
        window.location.reload();
      })
  }

  iconData:string[] = ["home","settings","shopping_cart","description",
  "verified","shopping_bag","pets","verified_user","room",
  "thumb_up_off_alt","bookmark","leaderboard","card_giftcard","card_travel","not_accessible",
  "construction","health_and_safety","domain","restaurant","hotel","cleaning_services","chair","bed","blender"]

}
