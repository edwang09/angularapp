import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { PostsService } from '../../services/posts.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Post } from '../../models/Post'


import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = {
    title:"",
    caption:"",
    summary:"",
    author:"",
    createDate: Date.now(),
    content: ''
  }
  public options: Object
  downloadURL: Observable<string>
  
  constructor(
    private storage: AngularFireStorage,
    private PostsService:PostsService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    let that = this
    this.options = {
      events : {
        'froalaEditor.image.inserted' : function(e, editor, $img, response) {
          // Points to the root reference
          that.uploadImage($img[0].src)
        }
      }
    }
  }

  onSubmit() {
      // Add new client
      this.PostsService.newPost(this.post);
      // Show message
      this.flashMessage.show('New post added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/']);
  }
  addtext(){
  }
  addimage(){
  }
  uploadImage(src){
    var fileRef = this.storage.ref(`postImages/${Date.now()}_${Math.floor(Math.random() * 100)}`);
    this.downloadURL = fileRef.getDownloadURL();
    console.log(src)
    fetch(src)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        const task = fileRef.put(blob)
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(e=>{
              this.post.caption=e
              this.post.content=this.post.content.replace(src,e)
            })
          })
       ).subscribe()
      });
  }
}
