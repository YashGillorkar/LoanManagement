import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { SignInComponent } from './include/sign-in/sign-in.component';
import { HomeComponent } from './template/home/home.component';
import { VisitorheaderComponent } from './include/visitorheader/visitorheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './template/about/about.component';
import { ErrorComponent } from './include/error/error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    EnquiryComponent,
    EmiCalculatorComponent,
    SignInComponent,
    HomeComponent,
    VisitorheaderComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
