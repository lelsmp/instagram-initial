import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  slides = [
    {
      image: "assets/imgs/pic008.jpg",
    },
    {
      image: "assets/imgs/pic009.jpg",
    },
    {
      image: "assets/imgs/pic010.jpg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
