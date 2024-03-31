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
    return this.http.get<Character[]>(url);
  }

  public getPageCharacters(page: number): Observable<Info<Character[]>> {
    return this.http.get<Info<Character[]>>(this.CHARACTER_PAGE_API + page);
  }


  //Detay için
  public getCharacters(id:number): Observable<Info<Character>>{
    return this.http.get<Info<Character>>(this.CHARACTER + id);
  }






}
