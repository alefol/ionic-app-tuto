import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonneProvider } from '../../providers/personne/personne';
import { Personne } from '../../entites/personne';

/**
 * Generated class for the PersonnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personne',
  templateUrl: 'personne.html',
})
export class PersonnePage implements OnInit {

  personnes: Personne[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public personneService: PersonneProvider) {
  }

  ngOnInit(): void {
    this.personneService.getAll().subscribe(
      personnes => {
        this.personnes = personnes;
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonnePage');
  }

}
