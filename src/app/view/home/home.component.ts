import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
import { ValidUser } from 'src/app/models/users/ValidUser.interface';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isResponsive = true;
  categories: CategoriesSongsI[] = [];
  idUsuario: number = 0;
  authToken: string = '';
  
  validUser: ValidUser = {
    idUsuario: 0,
    token: ''
  }

  constructor(
    private homeService: HomeService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
    private authService: AuthService
  ){}

  ngOnInit() {
    this.idUsuario = this.authService.getUserId();
    this.authToken = this.authService.getAuthToken();
    if(this.idUsuario === 0 || this.authToken === '') {
      this.router.navigate(['login'])
    }

    this.authService.validUser(this.idUsuario).subscribe( (data) => {
      this.validUser = data;
      if(this.validUser.idUsuario === this.idUsuario && this.validUser.token === this.authToken && this.authToken !== '') {
        this.authService.setIsAuthenticated(true);
        this.homeService.getAllCategoriesSongs().subscribe(data => {
          console.log(data);
          this.categories = data
        });
      } else {
        this.router.navigate(['login'])
      }
    });
  }

  
}

