import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit {

  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder, private enquiryService:EnquiryService) { }

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      first_Name: ['', [Validators.required]],
      middle_Name: [''],
      last_Name: ['', [Validators.required]],
      applicant_EmailId: ['', [Validators.required, Validators.email]],
      contact_Number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      alternateContactNumber: ['', [Validators.pattern(/^\d{10}$/)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      panCardNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]]
    });
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      this.enquiryService.postEnquiry(this.enquiryForm.value).subscribe(
        response => {
          alert('Enquiry submitted successfully');
          console.log('Enquiry submitted successfully', response);
        },
        error => {
          alert('Error submitting enquiry');
          console.error('Error submitting enquiry', error);
        }
      );
    } else {
      console.log('Form is invalid');
      alert('Invalid Form');
     
    }
    location.reload();
  }
}
