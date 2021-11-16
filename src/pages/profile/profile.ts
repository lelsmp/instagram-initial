import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Settings',
          icon: !this.platform.is('ios') ? 'cog' : null,
          handler: () => {
            console.log('Report clicked');
          }
        },
        {
          text: 'Archive',
          icon: !this.platform.is('ios') ? 'images' : null,
          handler: () => {
            console.log('Save clicked');
          }
        },
        {
          text: 'Your Activity',
          icon: !this.platform.is('ios') ? 'list' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Insights',
          icon: !this.platform.is('ios') ? 'stats' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'QR Code',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Saved',
          icon: !this.platform.is('ios') ? 'bookmark' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Discover People',
          icon: !this.platform.is('ios') ? 'person-add' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
