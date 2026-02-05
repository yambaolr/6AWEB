import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  static posts$: any;

  constructor(private http: HttpClient){}

  getPostsRemotely(): Observable<Post[]>{
    const cachedPosts = localStorage.getItem('posts');
    if (cachedPosts){
      return of(JSON.parse(cachedPosts));
    }
    return this.http.get<Post[]>(this.postsUrl).pipe(
        tap(posts => localStorage.setItem('posts', JSON.stringify(posts)))
    );
  }
}
