import { Injectable } from '@angular/core';
import { SongsI } from '../models/songs/songs.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsforcategoryService {

  url: string = 'http://localhost:9090/cancion/';
  constructor(private http: HttpClient) { }

  public getSongsForCategory(id:number) {
    let link = this.url + "list_genero/" + id;
    console.log(link);
    return this.http.get<SongsI[]>(link);
  }
}
