import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsI } from 'src/app/models/songs/songs.interface';
import { AuthService } from 'src/app/services/auth.service';
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
  nickname:string = '';
  authToken: string = '';
  idTipoUsuario: number = 0;

  constructor(
    private songsService: SongsService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.nickname = this.authService.getNickname();
    this.authToken = this.authService.getAuthToken();
    this.idTipoUsuario = this.authService.getIdTipoUsuario();
    if(this.nickname !== '' && this.authToken !== '' && this.idTipoUsuario === 1) {
    this.songsService.getAllSongs().subscribe(data => {
      console.log(data);
      this.songs = data
    });
  }
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
