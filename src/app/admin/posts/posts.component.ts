import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../core/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {

  public posts: Post[];
  public page$ = new BehaviorSubject(1);
  public total: number = 0;
  private destroy = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.page$.next(this.route.snapshot.params.page || 1);
    this.page$
      .asObservable()
      .pipe(
        tap(page => {
          page = parseInt(page.toString(), 10);
          if (!isNaN(page)) {
            this.router.navigate(['admin', 'posts', { page }]);
          }
        }),
        takeUntil(this.destroy),
        switchMap(page => {
          return this.route.data;
        })
      )
      .subscribe(
        data => {
          this.total = data.posts.total;
          this.posts = data.posts.posts;
        }
      );
  }

  changePage(page: number) {
    this.page$.next(page);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
