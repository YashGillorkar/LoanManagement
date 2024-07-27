import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../model/response-dto';


@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private baseUrl = 'http://localhost:1111';

  constructor(private http: HttpClient) { }

  postEnquiry(enquiry: any){
    return this.http.post(`${this.baseUrl}/postEnquiry`, enquiry);
  }

  getAllEnquiries() {
    return this.http.get(`${this.baseUrl}/getAllData`);
  }

  getAllEnquiriesByStatus(status:any) {
    return this.http.get(`${this.baseUrl}/getAlldataByStatus/${status}`);
  }

  // Method to get a single enquiry by ID
  getSingleData(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getSingleData/${id}`);
  }

  // Method to delete all enquiry data
  deleteAllData(): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(`${this.baseUrl}/deleteAllEnquiryData`);
  }

  // Method to update an enquiry by ID
  updateData(id: string, enquiryDetails: any): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(`${this.baseUrl}/updateById/${id}`, enquiryDetails);
  }

  // Method to delete a single enquiry by ID
  deleteSingleEnquiry(id: string): Observable<ResponseDto> {
    return this.http.delete<ResponseDto>(`${this.baseUrl}/deleteSingleEnquiry/${id}`);
  }

  // Method to get CibilDetails by PAN card number
  getCibilByPAN(panCardNumber: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getCibilByPAN/${panCardNumber}`);
  }



  updateEnquiryStatus(enquiryId: string , enquiryStatus: string){
    return this.http.put<ResponseDto>(`${this.baseUrl}/UpdateStatus/${enquiryId}/${enquiryStatus}`,{});
  }

  enquiryApprovedStatus(enquiryId: string , enquiryStatus: string){
    return this.http.put<ResponseDto>(`${this.baseUrl}/loanApproval/${enquiryId}/${enquiryStatus}`,{});
  }

  enquiryRejectedStatus(enquiryId: string , enquiryStatus: string){
    return this.http.put<ResponseDto>(`${this.baseUrl}/loanRejected/${enquiryId}/${enquiryStatus}`,{});
  }

}
