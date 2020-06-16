import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  SignUpForm: FormGroup;
  erreurMessage: string;

  constructor(private router: Router, private fromBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.SignUpForm = this.fromBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userName: ["", Validators.required],

      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, Validators.pattern("[0-9a-zA-Z]{6,}")],
      ],
      password2: [
        "",
        [Validators.required, Validators.pattern("[0-9a-zA-Z]{6,}")],
      ],
    });
    if (this.SignUpForm.invalid) {
      this.erreurMessage = "Please fill in all fields for Signing Up!";
    }
  }

  onSignUp() {
    this.router.navigate(["/signin"]);
  }
}
