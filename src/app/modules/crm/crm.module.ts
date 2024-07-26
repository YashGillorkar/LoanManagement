import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRMRoutingModule } from './crm-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerfiedEnquiresComponent } from './view-verfied-enquires/view-verfied-enquires.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    ViewVerfiedEnquiresComponent
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    ReactiveFormsModule
    ]
})
export class CRMModule { }
