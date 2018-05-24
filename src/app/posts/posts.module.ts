import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [CommonModule, PostsRoutingModule, NgbPaginationModule],
  declarations: [
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentItemComponent
  ],
  exports: [PostListComponent, PostDetailComponent]
})
export class PostsModule {}
