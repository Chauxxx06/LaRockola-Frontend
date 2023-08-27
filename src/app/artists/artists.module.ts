import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtistsRoutingModule } from './artists-routing.module';
import { CreateArtistComponent } from './view/create-artist/create-artist.component';
import { ListArtistComponent } from './view/list-artist/list-artist.component';
import { EditArtistComponent } from './view/edit-artist/edit-artist.component';


@NgModule({
  declarations: [
    CreateArtistComponent,
    ListArtistComponent,
    EditArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ArtistsModule { }
