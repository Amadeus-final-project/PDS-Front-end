import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private httpClient: HttpClient) { }
}
