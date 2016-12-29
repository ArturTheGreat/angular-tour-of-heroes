import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

import {Hero} from "./hero";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesApiUrl = 'api/heroes';

  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesApiUrl)
      .toPromise()
      .then((response) => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(err: any): Promise<any>{
    console.error('Error happened',err);
    return Promise.reject(err.message || err);
  };

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesApiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesApiUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero))
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesApiUrl, JSON.stringify({name: name}))
      .toPromise()
      .then((res) => res.json().data)
      .catch(this.handleError)
  }

  remove(id: number): Promise<void> {
    const url = `${this.heroesApiUrl}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
