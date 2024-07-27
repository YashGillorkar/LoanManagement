import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-view-verfied-enquires',
  templateUrl:'./view-verfied-enquires.component.html',
  styleUrl: './view-verfied-enquires.component.css'
})
export class ViewVerfiedEnquiresComponent {

  allEnquiries:any =[];

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.enquiryService.getAllEnquiriesByStatus("Approved")
      .subscribe((res)=>{
        this.allEnquiries = res;
     })
  }

}
