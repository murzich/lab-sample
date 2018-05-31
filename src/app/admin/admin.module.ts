import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminComponent } from './admin.component';
import { PostResolver } from './posts/post.resolver';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersResolver } from './users/users.resolver';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
    AdminRoutingModule
  ],
  declarations: [
    UsersComponent,
    PostsComponent,
    EditPostComponent,
    EditUserComponent,
    AdminComponent
  ],
  exports: [
    UsersComponent,
    PostsComponent,
  ],
  providers: [
    PostResolver,
    UsersResolver
  ]
})
export class AdminModule { }
