import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  
  //https://pds-backend.herokuapp.com/agent
  public baseAgentURL ="http://localhost:9000/agent";


  constructor(private httpClient: HttpClient) { }
}
