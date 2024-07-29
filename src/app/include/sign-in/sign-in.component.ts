import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl:'./sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    })
  }

  onLogin() {
    let un = this.loginForm.controls['username'].value;
    let ps = this.loginForm.controls['password'].value;
    this.loginService.getAdmin(un, ps).subscribe((user: any) => {
      if (user != null) {
        let userJson: string = JSON.stringify(user)
        localStorage.setItem('user', userJson)
        console.log(userJson)
        this.router.navigateByUrl('/dashboard')
      } else {
        alert('enter valid Login data')
      }
    })
  }

}
