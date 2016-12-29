import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) {
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

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
