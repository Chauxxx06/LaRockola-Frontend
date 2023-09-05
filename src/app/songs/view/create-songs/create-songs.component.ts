import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }from '@angular/forms';
import { Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { SongsI } from 'src/app/models/songs/songs.interface';

@Component({
  selector: 'app-create-songs',
  templateUrl: './create-songs.component.html',
  styleUrls: ['./create-songs.component.css']
})
export class CreateSongsComponent {

  constructor(
    private songsService: SongsService,
    private router:Router,
  ){}

  formNew = new FormGroup<any>({
    idCancion: new FormControl({value: '', disabled:true}, Validators.required),
    nombreCancion: new FormControl('', Validators.required),
    imagenCancion: new FormControl('', Validators.required),
    idGenero:  new FormControl('', Validators.required),
    descripcionCancion: new FormControl('', Validators.required),
    urlCancion: new FormControl('', Validators.required),
    fechaCreoGenero: new FormControl({value: '', disabled:true}, Validators.required),
  })

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
