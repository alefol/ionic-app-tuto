import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../entites/personne';

/**
 * Generated class for the PersonnesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personne',
  templateUrl: 'personne.html'
})
export class PersonneComponent implements OnInit {

  @Input()
  personne: Personne;

  @Output()
  onDelete: EventEmitter<Personne> = new EventEmitter<Personne>();

  constructor() {
    console.log('Hello PersonnesComponent Component');
  }

  ngOnInit(){
    console.log("trololo");
  }

  supprimer(personne: Personne){
    console.log("suppression");
    this.onDelete.emit(personne);
  }

}
