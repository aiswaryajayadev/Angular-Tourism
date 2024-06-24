import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, NgIf, FooterComponent, NavBarComponent]
})
export class LoginComponent {
  loginForm!:FormGroup

  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(4),]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),]),
  
    });
  }
onSubmit() {

  console.log(this.loginForm.value);

}

 





}
