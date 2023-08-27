import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist/Artist.interface';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {
  artists : Artist[] = [];

  constructor(
    private artistService: ArtistService,
    private router:Router, 
  ) {}

  ngOnInit(): void {
    this.artistService.getAllArtist().subscribe(data => {
      console.log(data);
      this.artists = data;
    })
  }

  public addUser() {
    this.router.navigate(['artist/create']);
  }

}
