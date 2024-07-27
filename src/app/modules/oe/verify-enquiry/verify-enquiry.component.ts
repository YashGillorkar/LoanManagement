import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-verify-enquiry',
  templateUrl: './verify-enquiry.component.html',
  styleUrl: './verify-enquiry.component.css'
})
export class VerifyEnquiryComponent {
  allEnquiries: any = [];
  showCibil:boolean ;

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.getAllData();
    this.showCibil =false
  }



  getAllData(): void {
    this.enquiryService.getAllEnquiriesByStatus("Send To OE")
      .subscribe((res)=>{
        this.allEnquiries = res;
        showCibil: false
     })
  }
  
  clickApproved(id: string) {
   this.enquiryService.enquiryApprovedStatus(id,"Approved").subscribe();
   console.log("Approved");
  }

  rejected:"Rejected";
  
  rejectedEnquiry(id: string) {
    this.enquiryService.enquiryRejectedStatus(id,this.rejected).subscribe();
    console.log("Rejected");
  }

  getCibil() {
    this.showCibil = true
  }
}
