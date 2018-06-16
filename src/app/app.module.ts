import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UsersPage } from '../pages/users/users';
import { DgiiPage } from '../pages/dgii/dgii';
import { PokeApiPage } from '../pages/poke-api/poke-api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserServiceProvider } from '../providers/user-service/user-service';
import { DgiiServiceProvider } from '../providers/dgii-service/dgii-service';
import { PokeApiServiceProvider } from '../providers/poke-api-service/poke-api-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsersPage,
    DgiiPage,
    PokeApiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UsersPage,
    DgiiPage,
    PokeApiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    DgiiServiceProvider,
    PokeApiServiceProvider
  ]
})
export class AppModule {}
