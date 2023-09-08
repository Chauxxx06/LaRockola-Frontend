import { Injectable } from '@angular/core';
import { ArtistI } from '../models/artist/artistIdName.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistIdNameService {

  url: string = 'http://localhost:9090/artista/';
  constructor(private http: HttpClient) { }

  public getAllArtists(): Observable<ArtistI[]> {
    let link = this.url + "lst_name";
    return this.http.get<ArtistI[]>(link);
  }
}
