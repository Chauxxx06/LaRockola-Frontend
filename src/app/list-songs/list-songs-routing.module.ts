import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSongsComponent } from './view/list-songs/list-songs.component';
import { EditListComponent } from './view/edit-list/edit-list.component';
import { CreateListComponent } from './view/create-list/create-list.component';

const routes: Routes = [
  {path:'', component: ListSongsComponent},
  {path:'edit', component: EditListComponent},
  {path:'create', component: CreateListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListSongsRoutingModule { }
