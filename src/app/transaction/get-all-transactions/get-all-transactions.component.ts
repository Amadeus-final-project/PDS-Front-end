import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction} from '../transaction';


@Component({
  selector: 'get-all-transactions',
  templateUrl: './get-all-transactions.component.html',
  styleUrls: ['./get-all-transactions.component.css']
})
export class GetAllTransactionsComponent implements OnInit {

  constructor(    private http: HttpClient,
    private transactionService:TransactionService) { }

    allTransactions: Transaction[] = [];

  ngOnInit() {
    this.transactionService.getAllTransactions().subscribe((res:Transaction[]) => {this.allTransactions = res;});
  }

}


