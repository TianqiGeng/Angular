import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({ providedIn: 'root' })
export class HeroService {
  url: string = 'http://localhost:3000/heroes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  heroes: Array<Hero>;
  newHero: Hero;
  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes() {
    // TODO: send the message _after_ fetching the heroes
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.url);

  }

  getHero(id: number): Observable<Hero> {
    const detailurl = `${this.url}/${id}`;
    return this.http.get<Hero>(detailurl, this.httpOptions);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.url, hero, this.httpOptions);
  }
  deleteNote(id: number) {
    console.log("delete id =" + id);
    const detailurl = `${this.url}/${id}`
    return this.http.delete<Hero>(detailurl, this.httpOptions);
  }


  searchHeroes(term: string): Observable<Hero[]> {
    const detailurl = `${this.url}?name_like=${term}`;
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(detailurl).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
    );
  }
  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    console.log("hero" + hero + hero.id + hero.name);
    const detailurl = `${this.url}/${hero.id}`
    return this.http.put(detailurl, hero, this.httpOptions);
  }

}