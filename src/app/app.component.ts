import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 1, name: 'Hellboy'},
  {id: 2, name: 'Magneto'},
  {id: 3, name: 'Wolverine'},
  {id: 4, name: 'Superman'},
  {id: 5, name: 'Batman'},
  {id: 6, name: 'Jocker'},
  {id: 7, name: 'Hulk'},
  {id: 8, name: 'Iron Man'},
  {id: 9, name: 'Cp. America'},
  {id: 10, name: 'Spiderman'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes= HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onUnselect():void {
    this.onSelect(null);
  }

}
