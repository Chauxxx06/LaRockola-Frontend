import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtistComponent } from './view/list-artist/list-artist.component';
import { EditArtistComponent } from './view/edit-artist/edit-artist.component';
import { CreateArtistComponent } from './view/create-artist/create-artist.component';

const routes: Routes = [
  {path:'', component: ListArtistComponent},
  {path:'edit/:id', component: EditArtistComponent},
  {path:'create', component: CreateArtistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
