import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { PostsService } from '../../services/posts.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Post } from '../../models/Post'
import { finalize } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  uploadingImage: Boolean
  showPreview: Boolean = false

  post: Post = {
    title:"",
    caption:"",
    summary:"",
    author:"",
    createDate: Date.now(),
    content: ''
  }
  public options: Object
  
  constructor(
    private storage: AngularFireStorage,
    private PostsService:PostsService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private meta: Meta,
    private title: Title
  ) {
    title.setTitle('添加博文')
    meta.addTag({name: 'robots', content: 'NOINDEX, NOFOLLOW'}); 
}

  ngOnInit() {
    let that = this
    this.options = {
      events : {
        'froalaEditor.image.inserted' : function(e, editor, $img, response) {
          that.uploadingImage=true
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
      this.PostsService.newPost(this.post);
      // Show message
      this.flashMessage.show('New post added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/']);
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
