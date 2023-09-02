import { Injectable } from '@angular/core';
import { ListCancion } from 'src/app/models/List/List.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url:string = "http://localhost:9090/";

  //constructor() { }
  constructor(private http:HttpClient){ }

  public postList(form:ListCancion):Observable<ListCancion>{
    let link = this.url + "lista/save";
    console.log(link);
    return this.http.post<ListCancion>(link,form);
  }

  public getAllList(): Observable<ListCancion[]> {
    let link = this.url + "lista/list";
    try {
      console.log("ok!");
    } catch (error) {
      console.error(error);
    }
    return this.http.get<ListCancion[]>(link);
  }

  public getListtById(id:String) {
    let link = this.url + "lista/search/" + id;
    return this.http.get<ListCancion>(link);
  }

  public editList(form: ListCancion) {
    let link = this.url + "lista/update";
    return this.http.put<ListCancion>(link, form);
  }

  public deleteList(id:String): Observable<void> {
    let link = this.url + "lista/delete/" + id;
    return this.http.delete<void>(link);
  }

  


}
