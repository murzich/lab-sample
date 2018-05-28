import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TodosService } from '../core/todos.service';
import { User } from '../core/models/user';

@Injectable()
export class TodoListResolver implements Resolve<User> {

  constructor(private user: TodosService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.user.getUserTodo(route.params['username']);
  }
}
