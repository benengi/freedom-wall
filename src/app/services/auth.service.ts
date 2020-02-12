import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.getUserObservable();
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private getUserObservable(): Observable<User> {
    return this.afAuth.authState.pipe(
      map(firebaseUser => {
        if (firebaseUser) {
          return {
            username : firebaseUser.uid,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL
          };
        } else {
          return null;
        }
      })
    );
  }


}
