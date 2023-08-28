import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUser } from 'src/app/models/users/GetUser.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{

  users: GetUser[] = [];

  constructor(
    private router:Router,
    private userServices: UsersService
  ) {}

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

  public deleteUsers(id: number) {
    this.userServices.deleteUser(id).subscribe();
  }

}
