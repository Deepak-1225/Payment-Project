import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  
 
   
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    
    this.router.navigate(['home']);
    
  }
}