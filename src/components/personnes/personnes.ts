import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../entites/personne';

/**
 * Generated class for the PersonnesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personnes',
  templateUrl: 'personnes.html'
})
export class PersonnesComponent implements OnInit {

  @Input()
  personne: Personne;

  constructor() {
    console.log('Hello PersonnesComponent Component');
  }

  ngOnInit(){

  }

}
