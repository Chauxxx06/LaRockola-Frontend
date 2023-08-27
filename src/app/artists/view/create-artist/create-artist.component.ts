import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent {

  constructor(
    private artistService: ArtistService,
    private router:Router,
  ) {}

  formNew = new FormGroup<any>({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    fechaRegistro: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fechanacimiento: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    token: new FormControl('', Validators.required)
  })
  
}
