import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private api: HttpClient) { }

  public toggleCompleting(id: number, state: boolean): Observable<Todo> {
    const body = {
      'completed': !state
    };
    return this.api
      .patch<Todo>(`${ApiUrls.todos}/${id}`, body);
  }


  public getUserTodo(username) {
    return this.api.get<User>(ApiUrls.users, {
      params: {
        username: username,
        _embed: 'todos'
      }
    })
      .pipe(
        map(userArray => userArray[0])
      );
  }

}
