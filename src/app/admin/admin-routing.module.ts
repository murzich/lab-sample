import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'edit-post', component: EditPostComponent},
  {path: '', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }