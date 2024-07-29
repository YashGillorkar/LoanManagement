import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {
  allEnquiries:any =[];

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  sendToOe:string = 'Send To OE';

  getAllData(): void {
    this.enquiryService.getAllEnquiriesByStatus("Register")
      .subscribe((res)=>{
        this.allEnquiries = res;
     })
    
  }

  deleteEnquiry(id: string): void {
    this.enquiryService.deleteSingleEnquiry(id).subscribe(
      (response: any) => {
        console.log('Enquiry deleted successfully', response);
        this.getAllData(); 
      },
      error => {
        console.error('Error deleting enquiry', error);
      }
    );
  }

  editEnquiry(id: string): void {
    this.enquiryService.updateEnquiryStatus(id,this.sendToOe).subscribe();
    console.log('Edit enquiry', id);
    console.log('Enquiry Status Change to', this.sendToOe);
    location.reload();
  }
}
