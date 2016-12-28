import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  @Input()
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onUnSelect(){
    console.log(`unselected ${this.selectedHero.name} !`);
    this.selectedHero = null;
  }

  private getHeroes() {
    HeroService.getHeroes().then(h => this.heroes = h);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
