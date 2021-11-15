webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(99);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="film"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\tabs\tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\about\about.html"*/'<ion-header translucent>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-searchbar></ion-searchbar>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines="none">\n    <ion-item>User_001</ion-item>\n    <ion-item>User_002</ion-item>\n    <ion-item>User_003</ion-item>\n    <ion-item>User_004</ion-item>\n    <ion-item>User_005</ion-item>\n    <ion-item>User_006</ion-item>\n    <ion-item>User_007</ion-item>\n    <ion-item>User_001</ion-item>\n    <ion-item>User_002</ion-item>\n    <ion-item>User_003</ion-item>\n    <ion-item>User_004</ion-item>\n    <ion-item>User_005</ion-item>\n    <ion-item>User_006</ion-item>\n    <ion-item>User_007</ion-item>\n    <ion-item>User_001</ion-item>\n    <ion-item>User_002</ion-item>\n    <ion-item>User_003</ion-item>\n    <ion-item>User_004</ion-item>\n    <ion-item>User_005</ion-item>\n    <ion-item>User_006</ion-item>\n    <ion-item>User_007</ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reals\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\home\home.html"*/'<ion-header style="height: 50px;">\n  <ion-navbar style="height: 30px;">\n    <ion-title >Instagram</ion-title>\n\n    <ion-icon class="icon-header1" ios="ios-add" md="md-add"></ion-icon>\n    <ion-icon class="icon-header2" ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-header3" ios="ios-text" md="md-text"></ion-icon>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <ion-icon class="icon-pp"  ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed"  class="icon-align" ios="ios-more" md="md-more"></ion-icon>\n\n\n    <div class="card-title">User_001</div>\n    <img src="assets/imgs/pic001.jpg"/>\n\n    <ion-icon  class="icon-feed"  ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon  class="icon-feed"  name="chatbubbles"></ion-icon>\n    <ion-icon  class="icon-feed"  ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon  class="icon-feed"  class="icon-align-bookmark" ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">41 Likes</div>\n  \n  </ion-card>\n\n  <ion-card>\n\n    \n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon  class="icon-feed" class="icon-align" ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_002</div>\n    <img src="assets/imgs/pic002.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon  class="icon-feed"  name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">64 Likes</div>\n  </ion-card>\n\n  <ion-card>\n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed" class="icon-align"  ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_003</div>\n    <img src="assets/imgs/pic003.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-feed"   name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">72 Likes</div>\n  </ion-card>\n\n  <ion-card>\n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed"  class="icon-align" ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_004</div>\n    <img src="assets/imgs/pic004.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-feed"   name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">258 Likes</div>\n  </ion-card>\n\n  <ion-card>\n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed" class="icon-align"  ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_005</div>\n    <img src="assets/imgs/pic005.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-feed"   name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">906 Likes</div>\n  </ion-card>\n  \n  <ion-card>\n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed" class="icon-align"  ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_006</div>\n    <img src="assets/imgs/pic006.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-feed"   name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">498 Likes</div>\n  </ion-card>\n\n  <ion-card>\n    <ion-icon class="icon-pp"   ios="ios-contact" md="md-contact"></ion-icon>\n    <ion-icon class="icon-feed" class="icon-align"  ios="ios-more" md="md-more"></ion-icon>\n\n    <div class="card-title">User_007</div>\n    <img src="assets/imgs/pic007.jpg"/>\n\n    <ion-icon class="icon-feed"   ios="ios-heart" md="md-heart"></ion-icon>\n    <ion-icon class="icon-feed"   name="chatbubbles"></ion-icon>\n    <ion-icon class="icon-feed"   ios="ios-redo" md="md-redo"></ion-icon>\n\n    <ion-icon class="icon-feed"  class="icon-align-bookmark"   ios="ios-bookmark" md="md-bookmark"></ion-icon>\n\n    <div class="card-subtitle">100 Likes</div>\n  </ion-card>\n\n\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(99);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\letma\Documents\projetos\instagram\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Your Profile</ion-title>\n\n    <ion-icon class="icon-header1" ios="ios-add" md="md-add"></ion-icon>\n    <ion-icon class="icon-header2" ios="ios-menu" md="md-menu"></ion-icon>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-icon class="icon-pp"  ios="ios-contact" md="md-contact"></ion-icon>\n\n  <ion-card>\n    <div class="card-title">0</div>\n    <div class="card-subtitle">Posts</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">490</div>\n    <div class="card-subtitle">Followers</div>\n  </ion-card>\n\n  <ion-card>\n    <div class="card-title">670</div>\n    <div class="card-subtitle">Following</div>\n  </ion-card>\n  <div class="line-1"></div>\n\n  <p>Your name</p>\n  <p>Your Bio</p>\n\n  <div class="line-2"></div>\n\n\n  \n     <ion-icon class="icon-photo" ios="ios-images" md="md-images"></ion-icon>\n     <p class="p-photo">No photos yet</p>\n  \n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\letma\Documents\projetos\instagram\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map