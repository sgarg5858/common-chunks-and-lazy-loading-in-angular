import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataModule } from './data.module';

export interface Comment{
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}

export interface Post{
  userId:string;
  id:string;
  title:string;
  body:string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl="https://jsonplaceholder.typicode.com/";
  constructor(private httpClient:HttpClient) {
    console.log("Creating New Instance for Data Service")
   }

  private commentBehaviorSubject = new BehaviorSubject<Comment[]|null>(null);
  public readonly comments$ = this.commentBehaviorSubject.asObservable();

  getComments():void{

    // Add retry functionality!
    this.httpClient.get<Comment[]>(`${this.baseUrl}comments`)
    .subscribe({
      next:((comments:Comment[])=>{
        this.commentBehaviorSubject.next(comments);
      }),
      error: (error:any)=>{
        this.commentBehaviorSubject.next([])
      },
      complete:()=>{
        console.log("Complete")
        // this.commentBehaviorSubject.complete();
      }
    })
  }

  private postsBehaviorSubject = new BehaviorSubject<Post[]|null>(null);
  public readonly posts$ = this.postsBehaviorSubject.asObservable();

  getPosts():void{

    // Add retry functionality!
    this.httpClient.get<Post[]>(`${this.baseUrl}posts`)
    .subscribe({
      next:((posts:Post[])=>{
        this.postsBehaviorSubject.next(posts);
      }),
      error: (error:any)=>{
        this.postsBehaviorSubject.next([])
      },
      complete:()=>{
        console.log("Complete")
        // this.commentBehaviorSubject.complete();
      }
    })
  }


}
