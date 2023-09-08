import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
import { HomeService } from 'src/app/services/home.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

import { SongsI } from 'src/app/models/songs/songs.interface';
import { SongsService } from 'src/app/services/songs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isResponsive = true;
  categories: CategoriesSongsI[] = [];
  idSend: any;

  constructor(
    private homeService: HomeService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
  ){}

  ngOnInit(): void {
    this.homeService.getAllCategoriesSongs().subscribe(data => {
      console.log(data);
      this.categories = data
    });
  }

  public viewSongs(id: number) {
    this.idSend= id;
    this.sendIdComponent.sendIdComponents(this.idSend);
    console.log(this.idSend);
    this.router.navigate(['songsforcategory'])
  }

}

