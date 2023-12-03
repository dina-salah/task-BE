import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform !: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }

  createForm(){
    this.loginform = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8),Validators.maxLength(16)]]
    })
  }

loginAdmin(){
  console.log(this.loginform.value);
}  

}
