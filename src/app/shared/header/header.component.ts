import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

nickname:string = '';
emailUser: string = '';
idTipoUsuario: number = 0;
isAdmin:boolean = false;

constructor(
  private router:Router,
  private authService: AuthService
  ){ 
    this.nickname = this.authService.getNickname();
    this.emailUser = this.authService.getEmailUser();
    this.idTipoUsuario = this.authService.getIdTipoUsuario();
  }

  ngOnInit(): void {
    if(this.idTipoUsuario === 1) {
      this.isAdmin = true;
    }
  }

  public redirectHome() {
    this.router.navigate(['home']);
  }

  public redirectArtist() {
    this.router.navigate(['artist']);
  }

  public redirectAdminUser() {
    this.router.navigate(['admin-users']);
  }

  public redirectListSong() {
    this.router.navigate(['list-songs']);
  }

  public redirectSong() {
    this.router.navigate(['songs']);
  }

  public reCategories() {
    this.router.navigate(['category']);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
