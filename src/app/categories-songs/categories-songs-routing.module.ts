import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './view/list-categories/list-categories.component';
import { EditCategoriesComponent } from './view/edit-categories/edit-categories.component';
import { CreateCategoriesComponent } from './view/create-categories/create-categories.component';

const routes: Routes = [
  {path:'', component: ListCategoriesComponent},
  {path:'edit', component: EditCategoriesComponent},
  {path:'create', component: CreateCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesSongsRoutingModule { }
