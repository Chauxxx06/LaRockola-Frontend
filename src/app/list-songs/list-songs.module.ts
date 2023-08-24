import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSongsRoutingModule } from './list-songs-routing.module';
import { ListSongsComponent } from './view/list-songs/list-songs.component';
import { CreateListComponent } from './view/create-list/create-list.component';
import { EditListComponent } from './view/edit-list/edit-list.component';


@NgModule({
  declarations: [
    ListSongsComponent,
    CreateListComponent,
    EditListComponent
  ],
  imports: [
    CommonModule,
    ListSongsRoutingModule
  ]
})
export class ListSongsModule { }
