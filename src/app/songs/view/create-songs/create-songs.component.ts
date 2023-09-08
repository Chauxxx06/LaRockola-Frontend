import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }from '@angular/forms';
import { Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { SongsI } from 'src/app/models/songs/songs.interface';
import { CategoriesI } from 'src/app/models/categories-songs/categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArtistI } from 'src/app/models/artist/artistIdName.interface';
import { ArtistIdNameService } from 'src/app/services/artist-id-name.service';

@Component({
  selector: 'app-create-songs',
  templateUrl: './create-songs.component.html',
  styleUrls: ['./create-songs.component.css']
})
export class CreateSongsComponent implements OnInit{

  categories: CategoriesI[] = [];
  artists : ArtistI[] = [];

  constructor(
    private songsService: SongsService,
    private categoriesService: CategoriesService,
    private artistsService: ArtistIdNameService,
    private router:Router,
  ){}

  formNew = new FormGroup<any>({
    idCancion: new FormControl({value: '', disabled:true}),
    nombreCancion: new FormControl('', Validators.required),
    imagenCancion: new FormControl('', Validators.required),
    idGenero:  new FormControl('', Validators.required),
    descripcionCancion: new FormControl('', Validators.required),
    urlCancion: new FormControl('', Validators.required),
    fechaCreoGenero: new FormControl({value: '', disabled:true}, Validators.required),
  })

  ngOnInit() {
    [this.categoriesService.getAllCategories().subscribe((data) => {
      this.categories = data;
    }),
    this.artistsService.getAllArtists().subscribe((data) => {
      this.artists = data;
    })];
  }

  public postForm(form: SongsI) {
    this.songsService.addSongs(form).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['songs'])
  }

  public return(){
    this.router.navigate(['songs'])
  }

  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }

}
