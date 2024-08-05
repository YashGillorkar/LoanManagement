import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  private baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  postLoanApplication(formObj: any){
    return this.http.post(`${this.baseUrl}/insertAllData`, formObj);
  }


}
