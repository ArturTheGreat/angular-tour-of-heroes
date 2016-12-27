import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
