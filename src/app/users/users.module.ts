import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbPaginationModule
  ],
  declarations: [UserListComponent, TodoListComponent, UserDetailComponent, UserItemComponent]
})
export class UsersModule { }
