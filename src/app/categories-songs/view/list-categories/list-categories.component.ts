import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
import { CategoriesSongsService } from 'src/app/services/categories-songs.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit{

  categories : CategoriesSongsI[] = [];
  idSend: any;

  constructor(
    private categoriesSongsService: CategoriesSongsService,
    private router:Router,
    private sendIdComponent: IdEntitiesService,
  ){}

  ngOnInit(): void {
    this.categoriesSongsService.getAllCategoriesSongs().subscribe(data => {
      console.log(data);
      this.categories = data
    });
  }
  public addCategories() {
    console.log('ok');
    this.router.navigate(['category/create']);
  }

  public deleteCategories(id: number) {
    this.categoriesSongsService.deleteCategoriesSongs(id).subscribe();
    alert("Categoria Borrada");
  }

  public editCategories(id: number) {
    this.idSend= id;
    console.log('ok'+ this.idSend);
    this.sendIdComponent.sendIdComponents(this.idSend);
    this.router.navigate(['category/edit'])
  }

}
