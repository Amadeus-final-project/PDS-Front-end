import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public baseTransactionURL ="http://localhost:9000/transaction";

  constructor(private httpClient: HttpClient) { }
}
