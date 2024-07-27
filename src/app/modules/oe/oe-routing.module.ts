import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyEnquiryComponent } from './verify-enquiry/verify-enquiry.component';
import { VerifyloanEnquiryComponent } from './verifyloan-enquiry/verifyloan-enquiry.component';

const routes: Routes = [
  { path:'verify-enquiry' , component:VerifyEnquiryComponent},
  { path:'verifyloan-enquiry' , component:VerifyloanEnquiryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OERoutingModule { }
