import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUser } from 'src/app/models/users/GetUser.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{

  users: GetUser[] = [];
  nickname:string = '';
  authToken: string = '';
  idTipoUsuario: number = 0;

  constructor(
    private router:Router,
    private userServices: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.nickname = this.authService.getNickname();
    this.authToken = this.authService.getAuthToken();
    this.idTipoUsuario = this.authService.getIdTipoUsuario();
    if(this.nickname !== '' && this.authToken !== '' && this.idTipoUsuario === 1) {
    this.userServices.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }
  }

  public deleteUsers(id: number) {
    this.userServices.deleteUser(id).subscribe();
  }

}
