// customer-loan-application.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../../services/enquiry.service';
import { ActivatedRoute } from '@angular/router';
import { LoanApplicationService } from '../../../services/loan-application.service';

@Component({
  selector: 'app-customer-loan-application',
  templateUrl: './customer-loan-application.component.html',
  styleUrls: ['./customer-loan-application.component.css']
})
export class CustomerLoanApplicationComponent implements OnInit {

  public customerLoanForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private enquiryService: EnquiryService,
    private activeRouter: ActivatedRoute, 
    private loanApplicationService: LoanApplicationService
  ) { }

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
        documentId: [],
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

  data: any;
  flag: boolean = false;
  res_catcher: any;
  reader = new FileReader;
  img1: any;
  img2: any;
  img3: any;
  img4: any;
  img5: any;
  img6: any;
  img7: any;
  img8: any;

  addressProof: any;
  panCard: any;
  incomeTax: any;
  addharCard: any;
  photo: any;
  signture: any;
  bankCheque: any;
  salarySlips: any;

  patchEnquiryData() {
    this.enquiryService.getSingleData(this.activeRouter.snapshot.params['id']).subscribe(data => {
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
    const formData = new FormData();
    formData.append('customerDetails', JSON.stringify(this.customerLoanForm.value));
    formData.append('addrprof', this.addressProof);
    formData.append('pan', this.panCard);
    formData.append('incometax', this.incomeTax);
    formData.append('adhar', this.addharCard);
    formData.append('photo', this.photo);
    formData.append('signature', this.signture);
    formData.append('bankCheque', this.bankCheque);
    formData.append('slips', this.salarySlips);
    this.loanApplicationService.postLoanApplication(formData).subscribe();
    alert("Submited Sucessfully");
  }

  OnAddressProof(event: any) {
    this.addressProof = event.target.files[0];
    this.reader.onload = e => this.img1 = this.reader.result;
    this.reader.readAsDataURL(this.addressProof);
  }

  OnPanCard(event: any) {
    this.panCard = event.target.files[0];
    this.reader.onload = e => this.img2 = this.reader.result;
    this.reader.readAsDataURL(this.panCard);
  }

  OnIncome(event: any) {
    this.incomeTax = event.target.files[0];
    this.reader.onload = e => this.img3 = this.reader.result;
    this.reader.readAsDataURL(this.incomeTax);
  }

  OnAadhar(event: any) {
    this.addharCard = event.target.files[0];
    this.reader.onload = e => this.img4 = this.reader.result;
    this.reader.readAsDataURL(this.addharCard);
  }

  OnPhoto(event: any) {
    this.photo = event.target.files[0];
    this.reader.onload = e => this.img5 = this.reader.result;
    this.reader.readAsDataURL(this.photo);
  }

  OnSignature(event: any) {
    this.signture = event.target.files[0];
    this.reader.onload = e => this.img6 = this.reader.result;
    this.reader.readAsDataURL(this.signture);
  }

  OnBank(event: any) {
    this.bankCheque = event.target.files[0];
    this.reader.onload = e => this.img7 = this.reader.result;
    this.reader.readAsDataURL(this.bankCheque);
  }

  OnSalarySlip(event: any) {
    this.salarySlips = event.target.files[0];
    this.reader.onload = e => this.img8 = this.reader.result;
    this.reader.readAsDataURL(this.salarySlips);
  }

}
