import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdEntitiesService {

  private idFuente = new BehaviorSubject<any>(null);
  idActual = this.idFuente.asObservable();

  constructor() { }

  public sendIdComponents(id: any) {
    this.idFuente.next(id);
  }
  
}
