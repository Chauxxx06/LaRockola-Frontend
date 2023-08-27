import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist/Artist.interface';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent {

  // formNew = new FormGroup<any>({
  //   idArtista: new FormControl('', Validators.required),
  //   nombreArtista: new FormControl('', Validators.required),
  //   generoArtista: new FormControl('', Validators.required),
  //   descripcionArtista: new FormControl('', Validators.required),
  //   fechaRegistro: new FormControl('', Validators.required)
  // })

  constructor(
    private artistService: ArtistService,
    private router:Router,
  ) {}

  formNew = new FormGroup<any>({
    idArtista: new FormControl('', Validators.required),
    nombreArtista: new FormControl('', Validators.required),
    generoArtista: new FormControl('', Validators.required),
    descripcionArtista: new FormControl('', Validators.required),
    fechaRegistro: new FormControl('', Validators.required)
  })
 
  public postForm(form:Artist) {
    this.artistService.addArtist(form).subscribe(data => {
      let response: Artist = data;
    });
  }
  
public return() {
  this.router.navigate(['artist'])
}

public getCurrentDate(): string {
  const now: Date = new Date();
  const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
  return utcNow.toISOString();
}

}
