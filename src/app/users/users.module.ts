import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListResolver } from './todo-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbPaginationModule
  ],
  providers: [TodoListResolver],
  declarations: [UserListComponent, TodoListComponent]
})
export class UsersModule { }
