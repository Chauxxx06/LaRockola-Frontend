import { Injectable } from '@angular/core';
import { CategoriesSongsI } from '../models/categories-songs/Categories-songs.interface';
import { SongsI } from '../models/songs/songs.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  url: string = 'http://localhost:9090/genero-musical/';
  constructor(private http: HttpClient) { }

  public getAllCategoriesSongs(): Observable<CategoriesSongsI[]> {
    let link = this.url + "list";
    return this.http.get<CategoriesSongsI[]>(link);
  }

}
