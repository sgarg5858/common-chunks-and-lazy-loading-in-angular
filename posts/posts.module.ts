import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '../data/data.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',component:PostsComponent
      }
    ]),
    DataModule
  ]
})
export class PostsModule { }
