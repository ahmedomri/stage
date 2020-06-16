import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const appRoutes: Routes = [
  { path: "signin", component: LoginComponent },
  { path: "createAccount", component: SignUpComponent },
  { path: "", redirectTo: "signin", pathMatch: "full" }, // pathMarch : seulement si le path est vide
  { path: "**", redirectTo: "signin" },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, SignUpComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
