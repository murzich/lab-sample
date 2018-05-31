import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../core/models/post';
import { PostsService } from '../../core/posts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<Post[]> {
  constructor(private posts: PostsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.posts.list()
      .pipe(
        map(data => data.data )
      );
  }
}
