import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  

  public baseAgentURL ="https://pds-backend.herokuapp.com/agent";


  constructor(private httpClient: HttpClient) { }
}
