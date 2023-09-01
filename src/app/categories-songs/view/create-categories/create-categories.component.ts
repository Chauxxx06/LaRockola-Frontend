import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
import { CategoriesSongsService } from 'src/app/services/categories-songs.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent {

  constructor(
    private categoryService: CategoriesSongsService,
    private router:Router,
  ){}

  formNew = new FormGroup<any>({
    idGenero: new FormControl({value: '', disabled:true}, Validators.required),
    tipoGenero: new FormControl('', Validators.required),
    descripcionGenero: new FormControl('', Validators.required),
    imagenGenero:  new FormControl('', Validators.required),
    fechaCreoGenero: new FormControl({value: '', disabled:true}, Validators.required),
  })

  public postForm(form: CategoriesSongsI) {
    this.categoryService.addCategoriesSongs(form).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['category'])
  }

  public return(){
    this.router.navigate(['category'])
  }

  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }

}
