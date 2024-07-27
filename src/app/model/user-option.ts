export class UserOption {
    public static userRoles: Array<any> = [
      {
        "ADMIN": [
          { label: 'Add Employee', link: 'add-employee' },
          { label: 'View Employee', link: 'view-employee' },
          { label: 'App Statistics', link: 'statistics' }
        ],
        "CRM": [
          { label: 'Add Enquiry', link: 'add-enquiry' },
          { label: 'View Enquiry', link: 'view-enquiry' },
          { label: 'View Verfied Enqurires', link: 'verfied-enquires' }
        ],
        "OE":[
          { label: 'Verify Enquiry', link: 'verify-enquiry'},
          { label: 'Verify LoanForm', link: 'verifyloan-enquiry'}
        ]
      }
    ];
  }
  