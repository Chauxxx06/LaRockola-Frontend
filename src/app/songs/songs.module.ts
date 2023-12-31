import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SongsRoutingModule } from './songs-routing.module';
import { SelectSongsComponent } from './view/select-songs/select-songs.component';
import { EditSongsComponent } from './view/edit-songs/edit-songs.component';
import { CreateSongsComponent } from './view/create-songs/create-songs.component';


@NgModule({
  declarations: [
    SelectSongsComponent,
    EditSongsComponent,
    CreateSongsComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SongsModule { }
