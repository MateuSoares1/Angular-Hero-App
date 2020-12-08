import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  readonly HEROS_URL = environment.rootServiceURL + '/heros';  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpCliente: HttpClient) { }


  public getHeros(): Observable<Hero[]> {
    var result = this.httpCliente.get<Hero[]>(this.HEROS_URL);
    return result;
  }
}
