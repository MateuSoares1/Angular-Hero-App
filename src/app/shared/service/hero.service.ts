import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  apiUrl = 'https://ec2-3-17-139-218.us-east-2.compute.amazonaws.com';

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
