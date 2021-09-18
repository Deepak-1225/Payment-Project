import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  form = new FormGroup({

    custodianID: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  });

   

  get f(){

    return this.form.controls;

  }

   

  submit(){

    console.log(this.form.value);

  }

 

 
}