import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  apiUrl = 'https://aw-hero-api.herokuapp.com/heros';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpCliente: HttpClient) { }


  public getHeros(): Observable<any[]> {
    var resul = this.httpCliente.get<any[]>(this.apiUrl); 
    debugger;
    return resul;
  }
}
