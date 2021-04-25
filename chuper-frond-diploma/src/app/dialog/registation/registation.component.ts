import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SecurityService } from 'src/app/shared/security.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistationComponent>,
    private _authService:SecurityService,
    ) { 
      this.signUpForm  =  this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        passwordCheck:['',Validators.required],
    });
    }

  signUpForm: FormGroup;

  ngOnInit(): void {
   
  }

  signUp(){
    this._authService.signUp(this.signUpForm.controls["username"].value,this.signUpForm.controls["password"].value).subscribe(data =>{
      this._authService.login(this.signUpForm.controls["username"].value,
                            this.signUpForm.controls["password"].value)
                            .subscribe( response => {
                              localStorage.setItem("ACCESS_TOKEN",response.headers.get('Authorization'));
                              this.dialogRef.close();
                            });
    })
  }

}
