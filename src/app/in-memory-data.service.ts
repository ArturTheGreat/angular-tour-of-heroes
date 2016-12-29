import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
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
    return {heroes};
  }
}
