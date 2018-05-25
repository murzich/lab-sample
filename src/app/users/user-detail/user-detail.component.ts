import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { User } from '../../core/models/user';
import { UsersService } from '../../core/users.service';
import { Todo } from '../../core/models/todo';
import { TodosService } from '../../core/todos.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public user: User;
  public todos: Todo[];

  constructor(
    private usersService: UsersService,
    private todosService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        tap(() => {
          this.loading$.next(true);
        }),
        takeUntil(this.destroy),
        switchMap(params => this.loadUser(+params['id']))
      )
      .subscribe(
        ((user) => {
          this.user = user;
          this.todos = user.todos;
          this.loading$.next(false);
        }),
        err => {
          this.loading$.next(false);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private loadUser(id) {
    return this.usersService.getUserTodo(id);
  }

  public toggle(id: number, state: boolean) {
    this.todosService.toggleCompleting(id, state)
      .subscribe();
  }
}
