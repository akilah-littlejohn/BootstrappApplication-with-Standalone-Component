import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import firebase from 'firebase/app';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FireModule { }
export const _firebaseApi = firebase;
