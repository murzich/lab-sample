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
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public loading$ = new BehaviorSubject(false);
  private destroy = new Subject();
  public user: User;
  public todos: Todo[];

  constructor(
    private usersService: UsersService,
    private todosService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(
        data => {
          this.user = data.user;
          this.todos = data.user.todos;
        },
        () => {
          console.error(new Error('AHHHR! RSALVOR!'));
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private loadUser(username) {
    return this.todosService.getUserTodo(username);
  }

  public toggle(id: number, state: boolean) {
    this.todosService.toggleCompleting(id, state)
      .subscribe();
  }
}
