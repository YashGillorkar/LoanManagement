import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-verify-enquiry',
  templateUrl: './verify-enquiry.component.html',
  styleUrls: ['./verify-enquiry.component.css']
})
export class VerifyEnquiryComponent implements OnInit {
  allEnquiries: any = [];
  cibilScores: { [key: string]: number } = {};

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getCibil(id: string) {
    this.enquiryService.getSingleCibil(id).subscribe(response => {
      this.cibilScores[id] = response.cibil_score;
    });
  }

  getAllData(): void {
    this.enquiryService.getAllEnquiriesByStatus("Send To OE")
      .subscribe(res => {
        this.allEnquiries = res;
        // Initialize all cibil scores to zero
        this.allEnquiries.forEach((enquiry: any) => {
          this.cibilScores[enquiry.enquiry_Id] = 0;
        });
      });
  }

  clickApproved(id: string) {
    this.enquiryService.enquiryApprovedStatus(id, "Approved").subscribe();
    console.log("Approved");
    location.reload();
  }

  rejectedEnquiry(id: string) {
    this.enquiryService.enquiryRejectedStatus(id, "Rejected").subscribe();
    console.log("Rejected");
    location.reload();
  }
}
