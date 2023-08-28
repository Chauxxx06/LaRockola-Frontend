import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetUser } from 'src/app/models/users/GetUser.interface';
import { UsersService } from 'src/app/services/users.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  idReceived: any;
  //private subscription: Subscription;

  constructor(
    private recvIdComponent: IdEntitiesService,
    private router:Router,
    private userService: UsersService,
    ){
      //this.subscription = this.recvIdComponent.idActual.subscribe(dato => { this.idReceived = dato});
      this.idReceived = 2
      console.log(this.idReceived);
  }

  formEdit = new FormGroup<any>({
    idUsuario: new FormControl({value: '', disabled:true}, Validators.required),
    idTipoUsuario: new FormControl('', Validators.required),
    nombreUsuario: new FormControl('', Validators.required),
    emailUsuario: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fechaRegistro: new FormControl('', Validators.required),
    tipoUsuario: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.userService.getUserById(this.idReceived).subscribe( data => 
      {console.log(data);
      this.formEdit.setValue({
        'idUsuario': data.idUsuario,
        'idTipoUsuario': data.idTipoUsuario,
        'nombreUsuario': data.nombreUsuario,
        'emailUsuario': data.emailUsuario,
        'nickname': data.nickname,
        'password': data.password,
        'fechaRegistro': this.getCurrentDate(),
        'tipoUsuario': null
      })}
    )
  }

  public postForm(form: GetUser) {
    this.userService.editUser(form).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['home'])
  }

  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }

  public return(){
    this.router.navigate(['home'])
  }
  
}
