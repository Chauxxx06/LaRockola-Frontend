import { Injectable } from '@angular/core';
import { CategoriesI } from '../models/categories-songs/categories.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url: string = 'http://localhost:9090/genero-musical/';
  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<CategoriesI[]> {
    let link = this.url + "lst_name";
    return this.http.get<CategoriesI[]>(link);
  }
}
