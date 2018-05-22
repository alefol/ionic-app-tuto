import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonnesPage } from './personnes';

@NgModule({
  declarations: [
    PersonnesPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonnesPage),
  ],
})
export class PersonnesPageModule {}
