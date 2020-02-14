import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  createBoard() {
    return this.db.collection<Board>('boards').add({
      name: 'Temporary Name',
      posts: null,
      created: new Date(),
      expiry: new Date(999999999999999)
    });
  }

  getBoard(boardId: string): Observable<Board> {
    return this.db.collection<Board>('boards').doc<Board>(boardId).valueChanges().pipe(
      map(board => ({ id: boardId, ...board }))
    );
  }

  getBoards(): Observable<Board[]> {
    return this.db.collection<Board>('boards').valueChanges({idField: 'id'});
  }

  addPost(post: Post) {
    return this.db.collection('boards')
      .doc(post.boardId)
      .update({
        posts: firebase.firestore.FieldValue.arrayUnion(post)
      });
  }

  updatePosts(boardId: string, posts: Post[]) {
    return this.db.collection('boards')
      .doc(boardId)
      .update({ posts });
  }
}
