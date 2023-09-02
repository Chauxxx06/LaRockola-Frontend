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
}
