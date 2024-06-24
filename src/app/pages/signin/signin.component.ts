import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-signin',
    standalone: true,
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
    imports: [ReactiveFormsModule, NgIf, FooterComponent, NavBarComponent]
})
export class SigninComponent {
  signUpForm!:FormGroup

  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(4),]),
      password: new FormControl('',[Validators.required,Validators.minLength(4),]),
      email:new FormControl('',[Validators.required]),
  
    });
  }
onSubmit() {

  console.log(this.signUpForm.value);

}
}
