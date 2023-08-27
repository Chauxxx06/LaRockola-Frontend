import { Injectable } from '@angular/core';
import { Artist } from '../models/artist/Artist.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  url: string = 'http://localhost:9090/artista/';

  constructor(private http: HttpClient) { }

  public getAllArtist(): Observable<Artist[]> {
    let link = this.url + "list";
    return this.http.get<Artist[]>(link);
  }

  public addArtist(form:Artist): Observable<Artist> {
    let link = this.url + "save";
    return this.http.post<Artist>(link, form);
  }

  public deleteArtist(id:String): Observable<void> {
    let link = this.url + "delete/" + id;
    console.log(link);
    return this.http.delete<void>(link);
  }
}
