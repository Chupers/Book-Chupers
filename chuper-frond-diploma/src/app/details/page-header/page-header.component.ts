import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/dialog/login/login.component';
import { Accommodation } from 'src/app/entity/Accommodation';
import { AccommodationService } from 'src/app/shared/accommodation.service';
import { FeedbackService } from 'src/app/shared/feedback.service';
import { RentslRecordService } from 'src/app/shared/rentsl-record.service';
import { SecurityService } from 'src/app/shared/security.service';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  searchForm: FormGroup;
  commentForm: FormGroup;
  availabilityCheck:Boolean = false

  accommodation!: Accommodation;
  currentId!: number;
  currentRate = 1;

  stars : StarComponent[] = 
  [
    {value: 1, isFilled:false},
    {value: 2, isFilled:false},
    {value: 3, isFilled:false},
    {value: 4, isFilled:false},
    {value: 5, isFilled:false}
  ]

  constructor(private _formBuilder: FormBuilder,
    private _route:ActivatedRoute,
    private _searchService:AccommodationService,
    public dialog: MatDialog,
    private _feedbackService:FeedbackService,
    private _rentslRecordService:RentslRecordService,
    private _snackBar: MatSnackBar,
    private _loginService: SecurityService) {

      this.currentId = parseInt(this._route.snapshot.paramMap.get('id')!)
      this._searchService.getAccommodationById(this.currentId).subscribe(response=>{
        this.accommodation = response
      })
    this.commentForm = this._formBuilder.group({
      star:['',Validators.required],
      text:['',Validators.required],
    })
    this.searchForm  =  this._formBuilder.group({
      placeToGo: ['', Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
  });
   }

  ngOnInit(): void {
    this.fillStar(this.currentRate)
  }

  selectStar(value:number){
    this.currentRate = value
    this.fillStar(this.currentRate)
  }

  fillStar(value: number){
    this.stars.forEach(element => {
      if(element.value <= value){
        element.isFilled = true;
      }
      else{
        element.isFilled = false;
      }
    });
  }

  clearStar(){
    this.stars.forEach(element => {
        element.isFilled = false;
    });
    this.fillStar(this.currentRate)
  }

  countDay:number = 0;
  checkAvailability(){

    this._rentslRecordService.checkAvailability(this.currentId,
        this.formatDate(this.searchForm.controls['startDate'].value),
        this.formatDate(this.searchForm.controls['endDate'].value))
        .subscribe(data=>{
          this.availabilityCheck = data
            if(this.availabilityCheck){
              let checkIn = new Date(this.searchForm.controls['startDate'].value)
              let checkOut = new Date(this.searchForm.controls['endDate'].value)
              this.countDay = checkOut.getDay() - checkIn.getDay() + 1;
            }
            else{
              this.openSnackBar("Жилье на выбраную дату уже забронировано выберете другую","Ок")
            }
          })
  }
  onClickResult:any;
  onClick = ($event:any) => {
      console.log('onClick $event: ', $event);
      this.onClickResult = $event;
  };

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
reserv(){
  if(this._loginService.isLoggedIn()){
    this._rentslRecordService.reserv(this.currentId,
      this.formatDate(this.searchForm.controls['startDate'].value),
      this.formatDate(this.searchForm.controls['endDate'].value))
      
      .subscribe(data=>{
        console.log(data);
        this.openSnackBar("Вы успешно забронировали жилье проверте личный кабинет","Ok");
      })
  }
  else{
    
  }
}
 
  sentFeedback(){
    if(!this._loginService.isLoggedIn()){
      const dialogRef = this.dialog.open(LoginComponent)
    }
    else{
      this._feedbackService.putFeedBack(this.accommodation.accommodationId,this.currentRate,this.commentForm.controls["text"].value).subscribe(data=>{
        this.accommodation = data
        window.location.reload()
      })
    }
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getImage(id:number):string{
    let image : string = this.accommodation.accommodationInfo.photo[id] ?? "https://i2.wp.com/www.fitnessadrenaline.com/wp-content/uploads/2015/12/placeholder-6.jpg?fit=2000%2C1500&ssl=1";
    console.log(image)
      return image
    
  }

}
interface StarComponent {
  value: number;
  isFilled: boolean;
}
