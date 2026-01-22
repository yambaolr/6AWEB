import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Comments } from './comments.model';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  httpcomments: Comments[] = [];

  constructor(private httpClient: Httpclient){}

  ngOnInit(){
    this.httpClient.getUsersRemotely().subscribe((data) =>{
      this.httpusers = data;
      console.log(this.httpusers);
    })
    this.httpClient.getCommentsRemotely().subscribe((data)=>{
      this.httpcomments = data;
      console.log(this.httpcomments);
    })
  }
}
