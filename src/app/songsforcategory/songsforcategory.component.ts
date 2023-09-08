import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsI } from '../models/songs/songs.interface';
import { Subscription } from 'rxjs';
import { SongsforcategoryService } from '../services/songsforcategory.service';
import { IdEntitiesService } from '../services/utils/id-entities.service';

@Component({
  selector: 'app-songsforcategory',
  templateUrl: './songsforcategory.component.html',
  styleUrls: ['./songsforcategory.component.css']
})
export class SongsforcategoryComponent implements OnInit {

  idReceived: any;
  private subscription: Subscription;
  songs : SongsI[] = [];

  constructor(
    private recvIdComponent: IdEntitiesService,
    private router:Router,
    private songsForCategory: SongsforcategoryService,
  ){
    this.subscription = this.recvIdComponent.idActual.subscribe(dato =>{ this.idReceived = dato});
    console.log(this.idReceived);
  }

  ngOnInit() {
    this.getCancionesPorGenero(this.idReceived);
    console.log(this.idReceived);
  }

  getCancionesPorGenero(idGenero: number) {
    this.songsForCategory.getSongsForCategory(this.idReceived).subscribe( data =>
      {
        this.songs = data;
      });
  }
  return (){
    this.router.navigate(['home']);
  }

}
