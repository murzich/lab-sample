import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../core/models/post';
import { PostsService } from '../../core/posts.service';
import { Observable } from 'rxjs';

@Injectable()
export class PostResolver implements Resolve<Post[]> {
  constructor(private posts: PostsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    // TODO: not work
    return this.posts.list().data;
  }
}
