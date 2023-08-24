import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './view/list-categories/list-categories.component';
import { EditCategoriesComponent } from './view/edit-categories/edit-categories.component';
import { CreateArtistComponent } from '../artists/view/create-artist/create-artist.component';

const routes: Routes = [
  {path:'', component: ListCategoriesComponent},
  {path:'edit/:id', component: EditCategoriesComponent},
  {path:'create', component: CreateArtistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesSongsRoutingModule { }
