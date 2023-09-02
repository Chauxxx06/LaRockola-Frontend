import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private router:Router){ }

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
}
