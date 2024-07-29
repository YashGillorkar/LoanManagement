// customer-loan-application.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../../services/enquiry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-loan-application',
  templateUrl: './customer-loan-application.component.html',
  styleUrls: ['./customer-loan-application.component.css']
})
export class CustomerLoanApplicationComponent implements OnInit {

  public customerLoanForm: FormGroup;

  constructor(private fb: FormBuilder, private enquiryService: EnquiryService,private activeRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    this.customerLoanForm = this.fb.group({
      customer_First_Name: ['', Validators.required],
      customer_Middle_Name: [''],
      customer_Last_Name: ['', Validators.required],
      customerDateOfBirth: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customer_Mobile_Number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      customer_Additional_Mobile_Number: ['', Validators.pattern('^[0-9]{10}$')],
      customerAmountPaidForCar: ['', Validators.required],
      customerTotalLoanRequired: ['', Validators.required],
      customerPanCard: ['', Validators.required],
      loanstatus: ['', Validators.required],
      accountDetails: this.fb.group({
        accountType: ['', Validators.required],
        accountBalance: ['', Validators.required],
        accountStatus: ['', Validators.required],
        accountNumber: ['', Validators.required],
      }),
      allpersondoc: this.fb.group({
        addressProof: ['', Validators.required],
        panCard: ['', Validators.required],
        incomeTax: ['', Validators.required],
        addharCard: ['', Validators.required],
        photo: ['', Validators.required],
        signture: ['', Validators.required],
        bankCheque: ['', Validators.required],
        salarySlips: ['', Validators.required],
      }),
      customeraddress: this.fb.group({
        permanentAddress: this.fb.group({
          areaName: ['', Validators.required],
          cityName: ['', Validators.required],
          district: ['', Validators.required],
          state: ['', Validators.required],
          pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
          houseNumber: ['', Validators.required],
          streetName: ['', Validators.required],
        }),
        localAddress: this.fb.group({
          areaName: ['', Validators.required],
          cityName: ['', Validators.required],
          district: ['', Validators.required],
          state: ['', Validators.required],
          pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
          houseNumber: ['', Validators.required],
          streetName: ['', Validators.required],
        }),
      }),
      customercibilscore: this.fb.group({
        cibil_Id: ['', Validators.required],
        cibil_score: ['', Validators.required],
        remark: ['', Validators.required],
        isApplicable: [false, Validators.required],
      }),
      customermedicalinfo: this.fb.group({
        patientId: ['', Validators.required],
        professionsalPatientName: ['', Validators.required],
        billingDate: ['', Validators.required],
        loanAmount: ['', Validators.required],
        treatment: ['', Validators.required],
      }),
      familydependentinfo: this.fb.group({
        noOfFamilyMember: ['', Validators.required],
        noOfChild: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        dependentMember: ['', Validators.required],
        familyIncome: ['', Validators.required],
      }),
      gurantordetail: this.fb.group({
        guarantorName: ['', Validators.required],
        guarantorDateOfBirth: ['', Validators.required],
        guarantorRelationshipWithCustomer: ['', Validators.required],
        guarantorMobileNumber: ['', Validators.required],
        guarantorAdharCardNo: ['', Validators.required],
        guarantorMortgageDetails: ['', Validators.required],
        guarantorJobDetails: ['', Validators.required],
        guarantorLoaclAddress: ['', Validators.required],
        guarantorPermanentAddress: ['', Validators.required],
      }),
    });
   this.patchEnquiryData();
  }

  patchEnquiryData() {
    this.enquiryService.getSingleData( this.activeRouter.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.customerLoanForm.patchValue({
        customer_First_Name: data.first_Name,
        customer_Middle_Name: data.middle_Name,
        customer_Last_Name: data.last_Name,
        age: data.age,
        customerEmail: data.applicant_EmailId,
        customer_Mobile_Number: data.contact_Number,
        customer_Additional_Mobile_Number: data.alternateContactNumber,
        customerPanCard: data.panCardNumber,
        customercibilscore: {
          cibil_Id: data.cibilDetails.cibil_Id,
          cibil_score: data.cibilDetails.cibil_score,
          remark: data.cibilDetails.remark,
          isApplicable: data.cibilDetails.isApplicable,
        }
      });
    });

  }
  

  onSubmit() {
    if (this.customerLoanForm.valid) {
      console.log(this.customerLoanForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
