import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(f: NgForm){
    console.log(f.value);
    localStorage.setItem('token', f.value.email);
    this.router.navigate(['dashboard']);

  }

}
