import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaRockolaF';
  isLoginPage: boolean = false;
  isSignOut: boolean = false;

  constructor(
              private router: Router, 
              private activatedRoute: ActivatedRoute
            ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta actual y establecer shouldShowHeader en función de ella
        this.isLoginPage = event.url.includes('/login');
        this.isSignOut = event.url.includes('/sing-up');
      }
    });
}
}
