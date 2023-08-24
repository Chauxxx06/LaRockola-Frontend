import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectSongsComponent } from './view/select-songs/select-songs.component';
import { EditArtistComponent } from '../artists/view/edit-artist/edit-artist.component';
import { CreateSongsComponent } from './view/create-songs/create-songs.component';

const routes: Routes = [
  {path:'', component: SelectSongsComponent},
  {path:'edit/:id', component: EditArtistComponent},
  {path:'create', component: CreateSongsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
