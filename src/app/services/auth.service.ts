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

  emailSignUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  emailLogIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
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
