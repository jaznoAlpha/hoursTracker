//Follow this link: https://www.youtube.com/watch?v=wOLF-3wNQh8

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Firebase Modules
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

//ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//User(following video, don't what this is about yet)
import { UserEffects } from './effects/user.effects';
import { userReducer } from './reducers/user.reducer';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDYAYmDxkofDv7RA4H-TeWVhrURcCA4Aa0",
  authDomain: "hourstracker-df9d6.firebaseapp.com",
  databaseURL: "https://hourstracker-df9d6.firebaseio.com",
  projectId: "hourstracker-df9d6",
  storageBucket: "hourstracker-df9d6.appspot.com",
  messagingSenderId: "435055155849"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreModule.forRoot([
      user: userReducer
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
