import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../../core/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;

  public postForm = new FormGroup({
    title: new FormControl(),
    body: new FormControl(),
    userId: new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
    this.postForm.get('title').patchValue(this.post.title);
    this.postForm.get('body').patchValue(this.post.body);
    this.postForm.get('userId').patchValue(this.post.userId.toString());
  }
}
