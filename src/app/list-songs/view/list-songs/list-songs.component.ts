import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCancion } from 'src/app/models/List/List.interface';
import { ListService } from 'src/app/services/list.service';
import { IdEntitiesService } from 'src/app/services/utils/id-entities.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent {

  listacancion : ListCancion[] = [];
  idSend: any;

  constructor(private listaService: ListService, private router:Router,private sendIdComponent: IdEntitiesService ){}

  ngOnInit(): void {
    this.listaService.getAllList().subscribe(data => {
      console.log(data);
      this.listacancion = data
    });
  }

  public postList() {
    this.router.navigate(['list-songs/create']);
  }

  public editList(id: String) {
    this.idSend= id;
    this.sendIdComponent.sendIdComponents(this.idSend);
    this.router.navigate(['list-songs/edit'])
  }

  public deleteList(id: String) {
    this.listaService.deleteList(id).subscribe();
  }

}
