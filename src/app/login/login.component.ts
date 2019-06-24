import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    // Put Authentication Source Code here
    if(this.loginForm.value['username'] === null) {
      window.alert('Kindly input Username.');
      return;
    }
    if(this.loginForm.value['password'] === null) {
      window.alert('Kindly input Password.');
      return;
    }
    this.router.navigate(['../order-page'], {relativeTo: this.route});
  }

}
