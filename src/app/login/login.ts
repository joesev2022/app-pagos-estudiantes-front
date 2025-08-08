import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:Auth, private router:Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  login():void {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    let auth: boolean = this.authService.login(username, password);
    if(auth) {
      this.router.navigate(['admin']);
    }
  }
}
