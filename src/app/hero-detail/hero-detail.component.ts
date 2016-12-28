import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {

  @Input()
  hero: Hero;

  @Output()
  onUnSelect = new EventEmitter();

  unSelect():void {
    this.onUnSelect.emit();
    this.hero = null;
  }
}
