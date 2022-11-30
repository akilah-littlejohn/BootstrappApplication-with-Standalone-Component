import './polyfills';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AngularFireModule} from '@angular/fire/compat';



const firebaseConfig = {
  apiKey: "AIzaSyAx4ADHF838G0X97G5dfbxdziXQU1tbbr8",
  authDomain: "exampleloginpage-c6841.firebaseapp.com",
  projectId: "exampleloginpage-c6841",
  storageBucket: "exampleloginpage-c6841.appspot.com",
  messagingSenderId: "564781878081",
  appId: "1:564781878081:web:7d00fbe8fca9593f2a6fc0"
};



bootstrapApplication(AppComponent, 
  {providers:[
    importProvidersFrom([AngularFireModule.initializeApp(firebaseConfig)])
  ]});

 