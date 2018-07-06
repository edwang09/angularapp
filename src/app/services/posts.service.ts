import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posts: Observable<Post[]>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('createDate', 'desc'));
   }

   getPosts(): Observable<Post[]> {
    // Get all posts
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        data.id = a.payload.doc.id;
        return data;
      })}
    )
    )
    return this.posts;
  }

}
