import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist/Artist.interface';
import { ArtistService } from 'src/app/services/artist.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {
  artists : Artist[] = [];
  idSend: any;

  constructor(
    private artistService: ArtistService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
  ) {}

  ngOnInit(): void {
    this.artistService.getAllArtist().subscribe(data => {
      console.log(data);
      this.artists = data
    });
  }

  public addArtist() {
    this.router.navigate(['artist/create']);
  }

  public deleteArtist(id: String) {
    this.artistService.deleteArtist(id).subscribe();
  }

  public editArtist(id: String) {
    this.idSend= id;
    this.sendIdComponent.sendIdComponents(this.idSend);
    this.router.navigate(['artist/edit'])
  }


}
