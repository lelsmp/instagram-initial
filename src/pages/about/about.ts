import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  searchTerm: string;
  users = [
    {
      name: "alex",
      username: "user_001"
    },
    {
      "name": "luca",
      "username": "user_002"
    },
    {
      "name": "mikael",
      "username": "user_003"
    },
    {
      "name": "haley",
      "username": "user_004"
    },
    {
      "name": "claire",
      "username": "user_005"
    },
    {
      "name": "dede",
      "username": "user_006"
    },
    {
      "name": "luke",
      "username": "user_007"
    },
    {
      "name": "alexandra",
      "username": "user_059"
    },
    {
      "name": "fernanda",
      "username": "user_107"
    },
    {
      "name": "maria",
      "username": "user_567"
    },
    {
      "name": "leia",
      "username": "user_02237"
    },
    {
      "name": "ron",
      "username": "user_03133"
    },

    
  ];

  constructor(public navCtrl: NavController) {

  }

}
