import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public baseTransactionURL ="http://localhost:9000/transaction";

  constructor(private http: HttpClient,
    private router: Router) { }

    getAllTransactions(): Observable<Transaction[]>{
        let url = this.baseTransactionURL + '/getAllTransactions';
return this.http.get<Transaction[]>(url)
    
    }


}
