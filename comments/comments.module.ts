import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '../data/data.module';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',component:CommentsComponent
    }]),
    DataModule
  ]
})
export class CommentsModule { }
