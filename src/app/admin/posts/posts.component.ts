import { Component, OnInit } from '@angular/core';
import { PostResolver } from './post.resolver';
import { Post } from '../../core/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: []
})
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        data => console.log(data)
      );
  }

}
