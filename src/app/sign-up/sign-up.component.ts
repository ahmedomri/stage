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

  constructor(private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    /*  this.SignUpForm = this.fromBuilder.group({
      firstName: ["", [Validators.required, Validators.email]],
      lastName: ["", [Validators.required, Validators.email]],
      userName: ["", [Validators.required, Validators.email]],

      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, Validators.pattern("[0-9a-zA-Z]{6,}")],
      ],
    }); */
  }

  onSignUp() {
    this.router.navigate(["/signin"]);
  }
}
