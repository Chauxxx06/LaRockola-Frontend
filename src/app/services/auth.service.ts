import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReponseUser } from '../models/users/ResponseUser.interface';
import { LoginPlatform } from '../models/users/Login.interface';
import jwtDecode from 'jwt-decode';
import { ValidUser } from '../models/users/ValidUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:9090/auth/';
  private userId: number = 0;
  private idTipoUsuario: number = 0;
  private nickname:string = '';
  private authToken: string = '';
  private emailUser: string = '';

  constructor(private http: HttpClient) { }

  public loginUser(login: LoginPlatform): Observable<ReponseUser> {
    let link = this.url + "login";
    return this.http.post<ReponseUser>(link, login);
  }

  public validUser(id: number) {
    let link = this.url + "valid/" + id;
    return this.http.get<ValidUser>(link);
  }

  public saveLogin(userId: number, 
                    idTipoUsuario:number, 
                    nickname:string, 
                    token: string) {
    this.userId = userId;
    this.idTipoUsuario = idTipoUsuario;
    this.nickname = nickname;
    this.authToken = token;
    const decodedToken: any = jwtDecode(token);
    this.emailUser = decodedToken.email;
  }

  public logout() {
    this.userId = 0;
    this.idTipoUsuario = 0;
    this.nickname = '';
    this.authToken = '';
    this.emailUser = '';
  }

  getUserId() {
    return this.userId;
  }

  getIdTipoUsuario() {
    return this.idTipoUsuario;
  }

  getEmailUser() {
    return this.emailUser;
  }

  getNickname() {
    return this.nickname;
  }

  getAuthToken() {
    return this.authToken;
  }
}
