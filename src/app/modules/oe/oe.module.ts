import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OERoutingModule } from './oe-routing.module';
import { VerifyEnquiryComponent } from './verify-enquiry/verify-enquiry.component';
import { VerifyloanEnquiryComponent } from './verifyloan-enquiry/verifyloan-enquiry.component';


@NgModule({
  declarations: [
    VerifyEnquiryComponent,
    VerifyloanEnquiryComponent
    ],
  imports: [
    CommonModule,
    OERoutingModule
  ]
})
export class OEModule { }
