import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { UserprofilePageModule } from '../pages/userprofile/userprofile.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng2SearchPipeModule,
    UserprofilePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,

  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Ng2SearchPipeModule,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
