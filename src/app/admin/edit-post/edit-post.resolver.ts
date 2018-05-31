import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../core/models/post';
import { Observable } from 'rxjs';
import { PostsService } from '../../core/posts.service';

@Injectable()
export class EditPostResolver implements Resolve<Post> {
  constructor(private post: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return this.post.detail(route.params.id);
  }

}
