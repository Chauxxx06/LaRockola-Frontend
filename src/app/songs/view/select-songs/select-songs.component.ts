import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsI } from 'src/app/models/songs/songs.interface';
import { SongsService } from 'src/app/services/songs.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-select-songs',
  templateUrl: './select-songs.component.html',
  styleUrls: ['./select-songs.component.css']
})
export class SelectSongsComponent {

  songs : SongsI[] = [];
  idSend: any;

  constructor(
    private songsService: SongsService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
  ){}

  ngOnInit(): void {
    this.songsService.getAllSongs().subscribe(data => {
      console.log(data);
      this.songs = data
    });
  }
  public addSongs() {
    console.log('ok');
    this.router.navigate(['songs/create']);
  }

  public deleteSongs(id: number) {
    this.songsService.deleteSongs(id).subscribe();
    alert("Cancion Borrada");
  }

  public editSongs(id: number) {
    this.idSend= id;
    console.log('ok'+ this.idSend);
    this.sendIdComponent.sendIdComponents(this.idSend);
    this.router.navigate(['songs/edit'])
  }

}
