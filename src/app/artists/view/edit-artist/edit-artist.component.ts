import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artist } from 'src/app/models/artist/Artist.interface';
import { ArtistService } from 'src/app/services/artist.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent {

  idReceived: any;
  private subscription: Subscription;

  constructor(
    private recvIdComponent: IdEntitiesService,
    private router:Router,
    private artistService: ArtistService,
    ){
    this.subscription = this.recvIdComponent.idActual.subscribe(dato => { this.idReceived = dato});
    console.log(this.idReceived);
  }

  idArtist: String = '';
  artistData: Artist = {
    idArtista:'',
    nombreArtista: '',
    generoArtista: '',
    descripcionArtista: '',
    fechaRegistro: new Date(),
  };

  formEdit = new FormGroup<any>({
    idArtista: new FormControl({value: '', disabled:true}, Validators.required),
    nombreArtista: new FormControl('', Validators.required),
    generoArtista: new FormControl('', Validators.required),
    descripcionArtista: new FormControl('', Validators.required),
    fechaRegistro: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.artistService.getArtistById(this.idReceived).subscribe( data => 
      {console.log(data);
      this.formEdit.setValue({
        'idArtista': data.idArtista,
        'nombreArtista': data.nombreArtista,
        'generoArtista': data.generoArtista,
        'descripcionArtista': data.descripcionArtista,
        'fechaRegistro': this.getCurrentDate()
      })}
    )
  }

  public postForm(form: Artist) {
    this.artistService.editArtist(form).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['artist'])
  }

  public return(){
    this.router.navigate(['artist'])
  }

  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }

}
