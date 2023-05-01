import { Injectable } from '@angular/core';
import { IBiere } from '../iBiere';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IListeBiere } from '../iliste-bieres';

@Injectable({
  providedIn: 'root'
})


export class ApibieroService {
  private baseUrl :string = "http://127.0.0.1:8000/webservice/php/biere/";
  constructor(private http:HttpClient) { }
  
  // get pour les bieres

  getBiere(id: number | string): Observable<IBiere> {
    return this.http.get<{data: IBiere}>(`${this.baseUrl}/${id}`).pipe(
      map(response => {
        const { note_nombre, date_ajout, date_modif, note_moyenne, ...data } = response.data;
        return data;
      })
    );
  }
  
  getBieres():Observable<IListeBiere>{
    return this.http.get<IListeBiere>(this.baseUrl);
  }




 // post pour les bieres



  ajouterBiere(biere:IBiere):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    };
    return this.http.put<any>(this.baseUrl+biere.id_biere, biere, httpOption);
  };

  modifierBiere(biere:IBiere):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    };
    return this.http.post<any>(this.baseUrl+biere.id_biere, biere, httpOption);
  }



// delete pour biere


  effacerBiere(id:number|string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    }
    return this.http.delete<any>(this.baseUrl+id, httpOption);
  }
}
