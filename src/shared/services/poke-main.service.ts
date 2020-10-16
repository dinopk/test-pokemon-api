import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PathService } from '../api/path.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeMainService {
  public pokeAPI = new PathService();
  constructor(
    private http: HttpClient
    ) {
  }

  public getPokemon(): Observable<any> {
    return this.http
      .get<any>(`${this.pokeAPI.getApi('cards')}`)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  public getPokemonDetails(id): Observable<any> {
    return this.http
      .get<any>(`${this.pokeAPI.getApi('cards')}/${id}`)
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}
