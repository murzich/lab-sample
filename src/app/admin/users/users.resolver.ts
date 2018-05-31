import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../../core/models/user';
import { UsersService } from '../../core/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersResolver implements Resolve<User[]> {

  private page = 1;
  private perPage = 100;

  constructor(private users: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.users.list(this.page, this.perPage)
      .pipe(
        map(data => data.data)
      );
  }
}
