import { Injectable } from '@angular/core';
import { ListCancion } from 'src/app/models/List.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url:string = "http://localhost:8080/";

  //constructor() { }
  constructor(private http:HttpClient){ }

  postList(form:ListCancion):Observable<ResponseI>{
    let link = this.url + "lista/save";
    console.log(link);
    return this.http.post<ResponseI>(link,form);
  }


}
