import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

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
}
