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

  getAllData(): void {
    this.enquiryService.getAllEnquiries()
      .subscribe((res)=>{
        this.allEnquiries = res;
     })
  }

  deleteEnquiry(id: string): void {
    this.enquiryService.deleteSingleEnquiry(id).subscribe(
      (response: any) => {
        console.log('Enquiry deleted successfully', response);
        this.getAllData(); // Refresh the list after deletion
      },
      error => {
        console.error('Error deleting enquiry', error);
      }
    );
  }

  editEnquiry(id: string): void {
    console.log('Edit enquiry', id);
  }
}
