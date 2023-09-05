import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
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
  idTipoUsuario: number = 0;
  nickname:string = '';
  authToken: string = '';
  emailUser: string = '';

  constructor(
    private homeService: HomeService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.idTipoUsuario = this.authService.getIdTipoUsuario();
    this.nickname = this.authService.getNickname();
    this.emailUser = this.authService.getEmailUser();
    this.authToken = this.authService.getAuthToken();
    console.log(this.nickname);
    if(this.nickname !== '' && this.authToken !== '' ) {
      this.homeService.getAllCategoriesSongs().subscribe(data => {
        console.log(data);
        this.categories = data
      });
    } else {
      this.router.navigate(['login'])
    }   
  }

  
}

