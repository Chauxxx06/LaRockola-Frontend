import { Injectable } from '@angular/core';
import { Artist } from '../models/artist/Artist.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  url: string = 'http://localhost:9090/artista/';


  constructor(private http: HttpClient) { }

  public getAllArtist(): Observable<Artist[]> {
    let link = this.url + "list";
    try {
      console.log("ok!");
    } catch (error) {
console.error(error);
    }
    return this.http.get<Artist[]>(link);
  }

  public addArtist(form:Artist): Observable<Artist> {
    let link = this.url + "save";
    return this.http.post<Artist>(link, form);
  }

  public getArtistById(id:String) {
    let link = this.url + "search/" + id;
    return this.http.get<Artist>(link);
  }

  public deleteArtist(id:String): Observable<void> {
    let link = this.url + "delete/" + id;
    return this.http.delete<void>(link);
  }

  public editArtist(form: Artist) {
    let link = this.url + "update";
    return this.http.put<Artist>(link, form);
  }
}
