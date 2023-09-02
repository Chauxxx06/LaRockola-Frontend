import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesSongsI } from 'src/app/models/categories-songs/Categories-songs.interface';
import { CategoriesSongsService } from 'src/app/services/categories-songs.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent {

    idReceived: any;
    private subscription: Subscription;

    constructor(
      private recvIdComponent: IdEntitiesService,
      private router:Router,
      private categoriesService: CategoriesSongsService,
    ){
      this.subscription = this.recvIdComponent.idActual.subscribe(dato =>{ this.idReceived = dato});
      console.log(this.idReceived);
    }


    categoryData: CategoriesSongsI = {
      idGenero: 0,
      tipoGenero: '',
      descripcionGenero: '',
      imagenGenero: '',
      fechaCreoGenero: new Date()
    }

    formEdit = new FormGroup<any>({
      idGenero: new FormControl({value: '', disabled:true}, Validators.required),
      tipoGenero: new FormControl('', Validators.required),
      descripcionGenero: new FormControl('', Validators.required),
      imagenGenero:  new FormControl('', Validators.required),
      fechaCreoGenero: new FormControl({value: '', disabled:true}, Validators.required),
    })

    ngOnInit(): void {
      this.categoriesService.getCategoriesSongs(this.idReceived).subscribe( data =>
        {console.log(data);
        this.formEdit.setValue({
          'tipoGenero': data.tipoGenero,
          'descripcionGenero': data.descripcionGenero,
          'imagenGenero': data.imagenGenero,
          'fechaCreoGenero': this.getCurrentDate()
        })}
      )
    }

    public postForm(form: CategoriesSongsI) {
      this.categoriesService.editCategoriesSongs(form).subscribe(data => {
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
