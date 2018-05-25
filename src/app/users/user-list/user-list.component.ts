import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../core/users.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../core/models/user';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.usersService.list()
      .subscribe(
        res => {
          this.users = res.data;
          this.loading$.next(false);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
}
