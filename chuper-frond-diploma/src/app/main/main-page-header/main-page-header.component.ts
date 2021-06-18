import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/dialog/login/login.component';
import { RegistationComponent } from 'src/app/dialog/registation/registation.component';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/shared/account.service';
import { SecurityService } from 'src/app/shared/security.service';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  isAdmin : Boolean = false
  account: Account = new Account;
  isLogin : Boolean = false

  constructor(public loginService:SecurityService,
    public dialog:MatDialog,private _route:ActivatedRoute,private _router: Router,private accountService : AccountService) { 
      this.isLogin = this.loginService.isLoggedIn();
      console.log(this.isLogin);
    
    }

  ngOnInit(): void {
    if(this.isLogin){
      this.accountService.getAccount().subscribe(data =>{
        this.account = data
        console.log("host")
        console.log(this.account.host)
      })
    }
  }

  navigateToAccount(){
    this._router.navigate(['/account']);
  }

  login(){
    const dialogRef = this.dialog.open(LoginComponent)
    dialogRef.afterClosed().subscribe(data => {
      this.isLogin = this.loginService.isLoggedIn()
    })
  }

  navigateToFavorite(){
    this._router.navigate(['/favorite'])
  }




  navigateToAcc(){
    if(this.loginService.isLoggedIn()){
      this._router.navigate(['/host-home'])
    }
    else{
      this.login()
    }
    
  }
  navigateToBeHost(){
    if(this.isLogin){
      this._router.navigate(['/became-host'])
    }
    else{
      this.login()
    }
  }

  logout(){
    this.loginService.logout();
    window.location.reload();
  }

  signUp(){
    const dialogRef = this.dialog.open(RegistationComponent)
    dialogRef.afterClosed().subscribe(data =>{
      this.isLogin = this.loginService.isLoggedIn()
      window.location.reload();
    })
  }

 
  


}
