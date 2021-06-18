import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../entity/Account';
import { RentalRecord } from '../entity/RentalRecord';
import { AccountService } from '../shared/account.service';
import { RentslRecordService } from '../shared/rentsl-record.service';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account = new Account;
  isLogin : Boolean = false
  rentalRecords:RentalRecord[] = []
  displayedColumns: string[] = ['Name','CheckIn', 'CheckOut','Status'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<RentalRecord>;

  constructor(public loginService:SecurityService,
    public dialog:MatDialog,
    private _route:ActivatedRoute,
    private _router: Router,
    private accountService : AccountService,
    private rentalService: RentslRecordService) { 
      this.isLogin = this.loginService.isLoggedIn();
      console.log(this.isLogin);
    if(this.isLogin){
      this.accountService.getAccount().subscribe(data =>{
        this.account = data
        this.rentalService.getRecordServiceByActiveUser().subscribe(records=>{
          this.rentalRecords = records;
          this.dataSource = new MatTableDataSource(records);
        })
      })
    }
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

}
