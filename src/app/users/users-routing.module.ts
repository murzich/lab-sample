import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListResolver } from './todo-list.resolver';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ':username', component: TodoListComponent, resolve: {user: TodoListResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
