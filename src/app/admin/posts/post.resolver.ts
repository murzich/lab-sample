import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../core/models/post';
import { PostsService } from '../../core/posts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<any> {
  constructor(private posts: PostsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.posts.list(route.params.page)
      .pipe(
        map(data => {
          return {
            posts: data.data,
            total: data.total,
            page: data.page
          };
        } )
      );
  }
}
