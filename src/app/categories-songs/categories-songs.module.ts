import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesSongsRoutingModule } from './categories-songs-routing.module';
import { CreateCategoriesComponent } from './view/create-categories/create-categories.component';
import { EditCategoriesComponent } from './view/edit-categories/edit-categories.component';
import { ListCategoriesComponent } from './view/list-categories/list-categories.component';


@NgModule({
  declarations: [
    CreateCategoriesComponent,
    EditCategoriesComponent,
    ListCategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesSongsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesSongsModule { }
