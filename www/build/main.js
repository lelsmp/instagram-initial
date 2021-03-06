webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Settings',
                    icon: !this.platform.is('ios') ? 'cog' : null,
                    handler: function () {
                        console.log('Report clicked');
                    }
                },
                {
                    text: 'Archive',
                    icon: !this.platform.is('ios') ? 'images' : null,
                    handler: function () {
                        console.log('Save clicked');
                    }
                },
                {
                    text: 'Your Activity',
                    icon: !this.platform.is('ios') ? 'list' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Insights',
                    icon: !this.platform.is('ios') ? 'stats' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'QR Code',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Saved',
                    icon: !this.platform.is('ios') ? 'bookmark' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Discover People',
                    icon: !this.platform.is('ios') ? 'person-add' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Your Profile</ion-title>\n\n    <ion-icon class="icon-header1" ios="ios-add" md="md-add"></ion-icon>\n    <ion-icon class="icon-header2" ios="ios-menu" md="md-menu" (click)="openMenu()"></ion-icon>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-icon class="icon-pp"  ios="ios-contact" md="md-contact"></ion-icon>\n\n  <ion-card>\n    <div class="card-title">0</div>\n    <div class="card-subtitle">Posts</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">490</div>\n    <div class="card-subtitle">Followers</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">670</div>\n    <div class="card-subtitle">Following</div>\n  </ion-card>\n  <div class="line-1"></div>\n\n  <p>Your Name</p>\n  <p>Your Bio</p>\n\n  <div class="line-2"></div>\n\n\n  \n     <ion-icon class="icon-photo" ios="ios-images" md="md-images"></ion-icon>\n     <p class="p-photo">No photos yet</p>\n  \n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		274,
		4
	],
	"../pages/userprofile/userprofile.module": [
		275
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="film"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="person"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.users = [
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
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\about\about.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <ion-toolbar>\n\n      <ion-searchbar  \n      placeholder = \'Search users...\'\n      [(ngModel)]="searchTerm" \n      animated>\n      </ion-searchbar>\n\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n\n    <ion-item *ngFor="let user of users | filter:searchTerm">\n\n      <ion-label>{{user.name}}</ion-label>\n      <ion-label>{{user.username}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
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
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\contact\contact.html"*/'\n\n<ion-header>\n  <ion-navbar>\n\n    <ion-icon class="icon-header" ios="logo-instagram" md="logo-instagram"></ion-icon>\n\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n \n  <ion-slides direction="vertical" autoplay=2000 loop="true">\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image"/>\n  \n    </ion-slide>\n    \n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    HomePage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Report',
                    icon: !this.platform.is('ios') ? 'flag' : null,
                    handler: function () {
                        console.log('Report clicked');
                    }
                },
                {
                    text: 'Save',
                    icon: !this.platform.is('ios') ? 'download' : null,
                    handler: function () {
                        console.log('Save clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.whenClicked = function () {
        console.log("button clicked");
        this.navCtrl.push('UserprofilePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\home\home.html"*/'<ion-header style="height: 50px;">\n  <ion-navbar style="height: 30px;">\n    <ion-title >Instagram</ion-title>\n    \n    <button>\n      <ion-icon class="icon-header1" ios="ios-add" md="md-add"></ion-icon>\n    </button>\n    \n    <button>\n      <ion-icon class="icon-header2" ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n    \n    <button>\n      <ion-icon class="icon-header3" ios="ios-text" md="md-text"></ion-icon>\n    </button>\n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n    <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n\n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n    \n\n\n    <div class="card-title">User_001</div>\n    <img src="assets/imgs/pic001.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    \n\n    <div class="card-subtitle">41 Likes</div>\n  \n  </ion-card>\n\n  <ion-card>\n\n    \n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n  \n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_002</div>\n    <img src="assets/imgs/pic002.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">64 Likes</div>\n  </ion-card>\n\n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n  \n    <button class="icon-align" (click)="openMenu()">\n        <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_003</div>\n    <img src="assets/imgs/pic003.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">72 Likes</div>\n  </ion-card>\n\n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n\n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_004</div>\n    <img src="assets/imgs/pic004.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">258 Likes</div>\n  </ion-card>\n\n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n  \n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_005</div>\n    <img src="assets/imgs/pic005.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">906 Likes</div>\n  </ion-card>\n  \n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n\n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_006</div>\n    <img src="assets/imgs/pic006.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">498 Likes</div>\n  </ion-card>\n\n  <ion-card>\n\n    <button class="icon-pp" (click)="whenClicked()">\n      <ion-icon   ios="ios-contact" md="md-contact"></ion-icon>\n    </button>\n\n    <button class="icon-align" (click)="openMenu()">\n      <ion-icon  ios="ios-more" md="md-more"></ion-icon>\n    </button>\n\n    <div class="card-title">User_007</div>\n    <img src="assets/imgs/pic007.jpg"/>\n\n    <button class="icon-feed">\n      <ion-icon    ios="ios-heart" md="md-heart"></ion-icon>\n    </button>\n   \n    <button class="icon-feed">\n      <ion-icon    name="chatbubbles"></ion-icon>\n    </button>\n    \n    <button class="icon-feed">\n      <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n    </button>\n    \n\n    <button class="icon-align-bookmark">\n      <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n    </button>\n    <div class="card-subtitle">100 Likes</div>\n  </ion-card>\n\n\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_player_ngx__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_userprofile_userprofile_module__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_userprofile_userprofile_module__["UserprofilePageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_player_ngx__["a" /* VideoPlayer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userprofile__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserprofilePageModule = /** @class */ (function () {
    function UserprofilePageModule() {
    }
    UserprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userprofile__["a" /* UserprofilePage */]),
            ],
        })
    ], UserprofilePageModule);
    return UserprofilePageModule;
}());

//# sourceMappingURL=userprofile.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofilePage = /** @class */ (function () {
    function UserprofilePage(navCtrl, navParams, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    UserprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilePage');
    };
    UserprofilePage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Restrict',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Restrict clicked');
                    }
                },
                {
                    text: 'Block',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'key' : null,
                    handler: function () {
                        console.log('Block clicked');
                    }
                },
                {
                    text: 'Report',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'flag' : null,
                    handler: function () {
                        console.log('Report clicked');
                    }
                },
                {
                    text: 'About this acount',
                    icon: !this.platform.is('ios') ? 'information' : null,
                    handler: function () {
                        console.log('About clicked');
                    }
                },
                {
                    text: 'Hide Your Story',
                    icon: !this.platform.is('ios') ? 'eye-off' : null,
                    handler: function () {
                        console.log('Hide clicked');
                    }
                },
                {
                    text: 'Copy Profile URL',
                    icon: !this.platform.is('ios') ? 'copy' : null,
                    handler: function () {
                        console.log('Copy clicked');
                    }
                },
                {
                    text: 'Share This Profile',
                    icon: !this.platform.is('ios') ? 'share-alt' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userprofile',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\userprofile\userprofile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>User Profile</ion-title>\n\n\n    <ion-icon class="icon-header2" ios="ios-menu" md="md-menu" (click)="openMenu()"></ion-icon>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-icon class="icon-pp"  ios="ios-contact" md="md-contact"></ion-icon>\n\n  <ion-card>\n    <div class="card-title">0</div>\n    <div class="card-subtitle">Posts</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">490</div>\n    <div class="card-subtitle">Followers</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">670</div>\n    <div class="card-subtitle">Following</div>\n  </ion-card>\n  <div class="line-1"></div>\n\n  <p>Name</p>\n  <p>Bio</p>\n\n  <div class="line-2"></div>\n\n\n  \n     <ion-icon class="icon-photo" ios="ios-images" md="md-images"></ion-icon>\n     <p class="p-photo">No photos yet</p>\n  \n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\userprofile\userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
    ], UserprofilePage);
    return UserprofilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=userprofile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map