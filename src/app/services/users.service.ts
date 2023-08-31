import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../models/users/CreateUser.interface';
import { GetUser } from '../models/users/GetUser.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'http://localhost:9090/usuario/';

  constructor(private http: HttpClient) { }

  public addUser(form: CreateUser): Observable<CreateUser> {
    let link = this.url + "save";
    return this.http.post<CreateUser>(link, form)
  }

  public editUser(form: GetUser): Observable<CreateUser> {
    let link = this.url + "update";
    return this.http.put<GetUser>(link, form);
  }

  public getUserById(id: number): Observable<GetUser> {
    let link = this.url + "search/" + id;
    return this.http.get<GetUser>(link);
  }

  public getAllUsers(): Observable<GetUser[]> {
    let link = this.url + "list";
    return this.http.get<GetUser[]>(link);
  }

  public deleteUser(id: number): Observable<void> {
    let link = this.url + "delete/" + id;
    return this.http.delete<void>(link);
  }

}
