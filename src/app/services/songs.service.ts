import { Injectable } from '@angular/core';
import { SongsI } from '../models/songs/songs.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  url: string = 'http://localhost:9090/cancion/';
  constructor(private http: HttpClient) { }

  public getAllSongs(): Observable<SongsI[]> {
    let link = this.url + "list";
    return this.http.get<SongsI[]>(link);
  }

  public addSongs(form:SongsI): Observable<SongsI> {
    let link = this.url + "save";
    return this.http.post<SongsI>(link, form);
  }

  public getCategoriesSongs(id:number) {
    let link = this.url + "search/" + id;
    return this.http.get<SongsI>(link);
  }

  public deleteSongs(id:number): Observable<void> {
    let link = this.url + "delete/" + id;
    return this.http.delete<void>(link);
  }

  public editSongs(form: SongsI) {
    let link = this.url + "update";
    return this.http.put<SongsI>(link, form);
  }
}
