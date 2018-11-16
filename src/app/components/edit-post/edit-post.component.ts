import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { PostsService } from '../../services/posts.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Meta, Title } from '@angular/platform-browser';

import { Post } from '../../models/Post'


import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post
  public options: Object
  uploadingImage: Boolean
  showPreview: Boolean = false
  
  constructor(
    private storage: AngularFireStorage,
    private PostsService:PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private meta: Meta,
    private title: Title
  ) { 
      title.setTitle('编辑博文')
      meta.addTag({name: 'robots', content: 'NOINDEX, NOFOLLOW'}); 
     
  }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];
    this.PostsService.getPost(id).subscribe((post)=>{
      this.post = post
    })

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

  togglePreview(){
    this.showPreview=!this.showPreview
  }
  onSubmit() {
      // Add new client
      this.PostsService.updatePost(this.post);
      // Show message
      this.flashMessage.show('Post updated', {
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
    console.log("src: "+src)
    var fileRef = this.storage.ref(`postImages/${Date.now()}_${Math.floor(Math.random() * 100)}`);

    fetch(src)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        const task = fileRef.put(blob)
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(e=>{
              if (this.post.caption===""){
                this.post.caption=e
              }
              this.post.content=this.post.content.replace(src,e)
              console.log(e)
              this.uploadingImage=false
            })
          })
       ).subscribe()
      });
  }
}
