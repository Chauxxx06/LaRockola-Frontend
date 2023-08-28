import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router:Router,
  ){}

    loginForm = new FormGroup({
      usuario : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })

    onLogin(form:any){
      console.log(form);
    }

    public addUser() {
      this.router.navigate(['sing-up'])
    }
}
