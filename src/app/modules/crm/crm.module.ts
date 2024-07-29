import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRMRoutingModule } from './crm-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerfiedEnquiresComponent } from './view-verfied-enquires/view-verfied-enquires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerLoanApplicationComponent } from './customer-loan-application/customer-loan-application.component';


@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    ViewVerfiedEnquiresComponent,
    CustomerLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ]
})
export class CRMModule { }
