import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        data => this.posts = data.posts
      );
  }

}
