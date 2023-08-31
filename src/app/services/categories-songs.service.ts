import { Injectable } from '@angular/core';
import { CategoriesSongsI } from '../models/categories-songs/Categories-songs.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesSongsService {

  url: string = 'http://localhost:9090/genero-musical/';
  constructor(private http: HttpClient) { }

  public getAllCategoriesSongs(): Observable<CategoriesSongsI[]> {
    let link = this.url + "list";
    return this.http.get<CategoriesSongsI[]>(link);
  }

  public addCategoriesSongs(form:CategoriesSongsI): Observable<CategoriesSongsI> {
    let link = this.url + "save";
    return this.http.post<CategoriesSongsI>(link, form);
  }

  public getCategoriesSongs(id:number) {
    let link = this.url + "search/" + id;
    return this.http.get<CategoriesSongsI>(link);
  }

  public deleteCategoriesSongs(id:number): Observable<void> {
    let link = this.url + "delete/" + id;
    return this.http.delete<void>(link);
  }

  public editCategoriesSongs(form: CategoriesSongsI) {
    let link = this.url + "update";
    return this.http.put<CategoriesSongsI>(link, form);
  }
}
