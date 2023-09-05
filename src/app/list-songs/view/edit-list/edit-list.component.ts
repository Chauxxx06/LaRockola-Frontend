import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';
import { ListCancion } from 'src/app/models/List/List.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent {

  idReceived: any;
  private subscription: Subscription;

  constructor(
    private recvIdComponent: IdEntitiesService,
    private router:Router,
    private listService: ListService,
    ){
    this.subscription = this.recvIdComponent.idActual.subscribe(dato => { this.idReceived = dato});
    console.log(this.idReceived);
  }
  idList: String = '';
  listData: ListCancion = {
    idLista: '',
    nombreLista: '',
    descripcionLista: '',
    fechaCreoLista: new Date(),
  };

  formEdit = new FormGroup<any>({
    idLista: new FormControl({value: '', disabled:true}, Validators.required),
    nombreLista: new FormControl('', Validators.required),
    descripcionLista: new FormControl('', Validators.required),
    fechaCreoLista: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.listService.getListtById(this.idReceived).subscribe( data =>
      {console.log(data);
      this.formEdit.setValue({
        'idLista': data.idLista,
        'nombreLista': data.nombreLista,
        'descripcionLista': data.descripcionLista,
        'fechaCreoLista': this.getCurrentDate()
      })}
    )
  }

  public postForm(form: ListCancion) {
    this.listService.editList(form).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['list'])
  }

  public return(){
    this.router.navigate(['list'])
  }


  public getCurrentDate(): string {
    const now: Date = new Date();
    const utcNow: Date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()));
    return utcNow.toISOString();
  }


}
