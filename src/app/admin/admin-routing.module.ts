import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AdminComponent } from './admin.component';
import { PostResolver } from './posts/post.resolver';
import { UsersResolver } from './users/users.resolver';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, resolve: {posts: PostResolver}},
  {path: 'posts/:id', component: EditUserComponent},
  {path: 'users', component: UsersComponent, resolve: {users: UsersResolver}},
  {path: 'users/:id', component: EditPostComponent},
  {path: '', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
