
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    nickname : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  loginFail: boolean = false;
  
  constructor(
    private router:Router,
    private authService:AuthService
  ){}

  
  onLogin(form:any){
    this.authService.setIsAuthenticated(false);
    this.authService.loginUser(form).subscribe(
      (data) => {
        this.authService.saveLogin(data.idUsuario, data.idTipoUsuario, data.nickname, data.token);
        console.log("Credenciales validas");
        this.loginFail = false;
        this.router.navigate(['home'])
      },
      (error) => {
        if(error.status === 401) {
          console.error("Credenciales no validas")
          this.loginFail =true
        }
      }
    );

  }

  public addUser() {
    this.router.navigate(['sing-up'])
  }
}
