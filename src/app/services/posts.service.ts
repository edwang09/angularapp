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
  getPost(id: string): Observable<Post> {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    this.post = this.postDoc.snapshotChanges().pipe(
      map(action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Post;
        data.id = action.payload.id;
        return data;
      }
    })
  )

    return this.post;
  }
  newPost(post: Post) {
    this.postsCollection.add(post);
  }
  
  deletePost(post: Post) {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete();
  }

}
