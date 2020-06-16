import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  SignInForm: FormGroup;
  erreurMessage: string;

  constructor(private router: Router, private fromBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.SignInForm = this.fromBuilder.group({
      userName: ["", Validators.required],
      password: [
        "",
        [Validators.required, Validators.pattern("[0-9a-zA-Z]{6,}")],
      ],
    });
    if (this.SignInForm.invalid) {
      this.erreurMessage = "Please fill in all fields for Login!";
    }
  }

  onSignIn() {}
}
