import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signUpForm.value['username'] === null) {
      window.alert('Kindly input Username.');
      return;
    }
    if(this.signUpForm.value['password'] === null) {
      window.alert('Kindly input Password.');
      return;
    }

    this.router.navigate(['../order-page'], {relativeTo: this.route});
  }
}
