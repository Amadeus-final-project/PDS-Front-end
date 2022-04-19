import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/transaction/transaction';
import { UserService } from '../user.service';

@Component({
  selector: 'get-all-my-transactions',
  templateUrl: './get-all-transactions.component.html',
  styleUrls: ['./get-all-transactions.component.css']
})
export class GetAllMyTransactionsComponent implements OnInit {

  constructor(    private http: HttpClient,
    private userService:UserService) { }

    allTransactions: Transaction[] = [];

  ngOnInit() {
    this.userService.getAllTransactions().subscribe((res:Transaction[]) => {
      this.allTransactions = res;});
  }

}