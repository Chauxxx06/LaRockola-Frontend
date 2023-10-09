import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCancion } from 'src/app/models/List/List.interface';
import { ListService } from 'src/app/services/list.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css'],

})
export class ListSongsComponent {

//objeto de tipo lista cancion
  listacancion : ListCancion[] = [];
  idSend: any;
  mensajeEliminado: string | null = null;

  nombreLista: string = '';
  descripcionLista: string = '';
  fechaCreoLista: string = '';
  mostrarFormulario: boolean = false;

  mostrarFormulario_oculto() {
    this.mostrarFormulario = true;
  }

  constructor(private listaService: ListService, private router:Router,private sendIdComponent: IdEntitiesService ){}

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
    //fechaCreoLista: new FormControl('', Validators.required),
  })

  modoEdicion = false;
  listaEditandoId: string = "xx";
  cant_lista: number = 0;


  cancelarEdicion() {
    this.modoEdicion = false;
  }

  //carga la lista de canciones desde la base de datos
  ngOnInit(): void {
    this.listaService.getAllList().subscribe(data => {
      console.log(data);
      this.cant_lista = data.length; //varaible que guarda la contidad de listas
      this.listacancion = data
    });
  }

  public guardarEdicion(listacancio: ListCancion)
  {
    this.listaService.editList(listacancio).subscribe( data =>
      {console.log(data);}
    )
    this.modoEdicion = false;
  }

  //ruta del boton anaterior que redidiria al formulario pra crear la nueva lista
  public postList()
  {
    this.router.navigate(['list-songs/create']);
  }

  //LLama el servicion pra crear la nueva lista con los datos digitados.
  public postForm(){

    const nuevaLista= {
      idLista: '',
      nombreLista: this.nombreLista,
      descripcionLista: this.descripcionLista,
      fechaCreoLista: new Date
    };

    this.listaService.postList(nuevaLista).subscribe(data => {
      let response: ListCancion = data;


         // Isercion exitosa, ahora actualiza la lista
          this.listaService.getAllList().subscribe(data => {
            this.listacancion = data;
             });

    });
    // Limpia los campos del formulario
  this.nombreLista = '';
  this.descripcionLista = '';
  this.fechaCreoLista = '';

  // Oculta el formulario
  this.mostrarFormulario = false;

  }

  public editList(id: String) {
    this.modoEdicion = true;
    this.idSend= id;
    this.listaEditandoId = this.idSend;
    /*this.idSend= id;
    this.sendIdComponent.sendIdComponents(this.idSend);
    this.router.navigate(['list-songs/edit'])*/
  }



  public deleteList(id: String) {
    const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar esta lista de canciones?");
    if (confirmacion)
    {
          this.listaService.deleteList(id).subscribe
          (() =>
          {
            // Eliminación exitosa, ahora actualiza la lista
            this.listaService.getAllList().subscribe(data => {
              this.listacancion = data;
            });
            // Después de 3 segundos, el mensaje se eliminará es temporal de informacion
            this.mensajeEliminado = 'Lista Eliminada...';
          /*  setTimeout(() => {
              this.mensajeEliminado = null;
            }, 3000); // Después de 3 segundos, el mensaje se eliminará
*/
          }
          );
    }
  }



}
