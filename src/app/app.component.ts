import { Component, VERSION } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FireModule } from '../fire/fire.module';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    FireModule,
  ],
})
export class AppComponent {
  constructor(public auth: AngularFireAuth, fr: FireModule) {}
  login() {
    let provider = new firebase.default.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }
}
