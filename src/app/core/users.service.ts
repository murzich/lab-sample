import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiUrls } from './api-urls';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private api: HttpClient) {}

  list(page = 1, perPage = 10) {
    const params = {
      _limit: perPage.toString(),
      _page: page.toString()
    };
    return this.api
      .get<User[]>(ApiUrls.users, { params, observe: 'response' })
      .pipe(
        map(v => {
          return {
            data: v.body,
            total: +v.headers.get('X-Total-Count'),
            page,
            perPage
          };
        })
      );
  }

  detail(id) {
    return this.api.get<User>(`${ApiUrls.users}/${id}`, {
      params: {
        _expand: 'user',
        _embed: 'comments'
      }
    });
  }
}
