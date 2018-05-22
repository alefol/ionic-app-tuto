import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../../entites/personne';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

/*
  Generated class for the PersonneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonneProvider {

  personnes : Array<Personne> = [
    new Personne("John", "Doe", "john.doe@mail.com"),
    new Personne("Jane", "Doe", "jane.doe@mail.com"),
    new Personne("Jean", "Michel", "jean.michel@mail.com")
  ];

  constructor(public http: HttpClient) {
    console.log('Hello PersonneProvider Provider');
  }

  getAll() : Observable<Personne[]> {
    return of(this.personnes);
  }

}
