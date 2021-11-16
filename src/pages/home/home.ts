import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController) {}

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Report',
          icon: !this.platform.is('ios') ? 'flag' : null,
          handler: () => {
            console.log('Report clicked');
          }
        },
        {
          text: 'Save',
          icon: !this.platform.is('ios') ? 'download' : null,
          handler: () => {
            console.log('Save clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  whenClicked(){
    console.log("button clicked")
    this.navCtrl.push('UserprofilePage');
  }

  

}
