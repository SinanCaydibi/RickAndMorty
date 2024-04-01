import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './model/character';
import { HttpClient } from '@angular/common/http';
import { Info } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/?page=';

  private readonly CHARACTER = 'https://rickandmortyapi.com/api/character/';

  private http = inject(HttpClient);

  // public getCharacterByURL(url: string): Observable<Character> {
  //   return this.http.get<Character>(url);
  // }

public getCharacterByURL(url: string): Observable<Character[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
    });
    return this.http.get<Character[]>(url, { headers });
  }

  public getPageCharacters(page: number): Observable<Info<Character[]>> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
    });
    return this.http.get<Info<Character[]>>(this.CHARACTER_PAGE_API + page, {
      headers,
    });
  }

  //Detay için
  public getCharacters(id: number): Observable<Info<Character>> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
    });
    return this.http.get<Info<Character>>(this.CHARACTER + id, { headers });
  }






}
