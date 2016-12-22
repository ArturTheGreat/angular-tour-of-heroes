import { Component } from '@angular/core';

export class Hero{
  id: number;
  name: string;
  realName: string;
  realSurname: string;

  constructor(id: number, name: string, realName: string, realSurname: string){
    this.id = id;
    this.name = name;
    this.realName = realName;
    this.realSurname = realSurname;
  }

  get FullRealName():string{
    return `${this.realName} ${this.realSurname}`;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero =  new Hero(1, 'Windstorm', 'testReaLName','testRealSurname');
  // = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
}
