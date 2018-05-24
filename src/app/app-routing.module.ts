import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      { path: '', component: PostListComponent },
      { path: ':id', component: PostDetailComponent }
    ]
  },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
