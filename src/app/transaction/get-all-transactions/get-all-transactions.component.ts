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

  ngOnInit(): void {
    let url = this.transactionService.baseTransactionURL + '/getAllTransactions';
    let result = this.http.get<Transaction[]>(url).subscribe((response) => {
      if (response) {
          this.allTransactions = response;
      } else {
          alert("Something went wrong.")
      }
  });
  }

}
