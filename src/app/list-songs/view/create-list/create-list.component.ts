import { Component, OnInit } from '@angular/core';
import { ListCancion } from 'src/app/models/List.interface';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent {
  constructor(private router:Router, private lista:ListService){}

  list:any;

  formNew = new FormGroup<any>({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  })

  /*Funcion para dejar la fecha por defecto*/
  getCurrentDate(): string {

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  ngOnInit(): void {
    this.formNew.patchValue({
    });
  }
  /*post para guardar la lista*/
  postForm(form:ListCancion){
    console.log('postform');
    console.log(form);
    this.lista.postList(form).subscribe(data=>{
      console.log(data)
      let response:ResponseI=data;
      console.log(response);
     /* if(response.status=='ok'){
        this.router.navigate(['create-list', this.list]);
      }else{
        console.log('Error creando lista');
        //this.alerts.showError(response.result.error_msg, "Error!");
      }
      */
    })
  }

}
