import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { SecurityService } from 'src/app/shared/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private _authService:SecurityService,
    private _formBuilder: FormBuilder) { 
      this.loginForm  =  this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    }

  ngOnInit(): void {
   
  }

  login(){
    this._authService.login(this.loginForm.controls["username"].value,
                            this.loginForm.controls["password"].value)
                            .subscribe( response => {
                              localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
                              window.location.reload()
                              this.dialogRef.close();
                            });
   
  }

}
