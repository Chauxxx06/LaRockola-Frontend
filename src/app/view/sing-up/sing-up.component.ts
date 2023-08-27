import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUser } from 'src/app/models/users/CreateUser.interface';
import { GetUser } from 'src/app/models/users/GetUser.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  constructor(
    private userService: UsersService,
    private router:Router,
  ){}

  formNew = new FormGroup<any>({
    idTipoUsuario: new FormControl('', Validators.required),
    nombreUsuario: new FormControl('', Validators.required),
    emailUsuario: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fechaRegistro: new FormControl('', Validators.required)
  })

  public postForm(form:CreateUser) {
    this.userService.addUser(form).subscribe(data => {
      console.log(data);
    });
  }
  
  public return() {
    this.router.navigate(['home'])
  }


  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }

}
