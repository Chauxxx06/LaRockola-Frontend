import { Component } from '@angular/core';
import { ListCancion } from 'src/app/models/List/List.interface';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent {
  constructor(private router:Router, private listaService:ListService){}

  formNew = new FormGroup<any>({
    nombreLista: new FormControl('', Validators.required),
    fechaCreoLista: new FormControl('', Validators.required),
    descripcionLista: new FormControl('', Validators.required)
  })

public postForm(form:ListCancion){
  this.listaService.postList(form).subscribe(data => {
    let response: ListCancion = data;
  });
}

public return() {
  this.router.navigate(['ListCancion'])
}

  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }


}
