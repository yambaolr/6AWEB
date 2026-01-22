import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Comments } from './comments.model';

@Injectable({
  providedIn: 'root',
})

export class Httpclient {
  constructor(private http: HttpClient){}

  getUsersRemotely(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getCommentsRemotely(): Observable<Comments[]>{
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
