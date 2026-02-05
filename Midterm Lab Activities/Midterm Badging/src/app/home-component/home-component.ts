import { Component } from '@angular/core';
import { SlicePipe, UpperCasePipe } from '@angular/common';
import { DataService } from '../data-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-home-component',
  imports: [ UpperCasePipe, SlicePipe ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  httpposts : Post[] = [];

  constructor(private httpClient: DataService){}

  ngOnInit(){
    this.httpClient.getPostsRemotely().subscribe((data) =>{
      this.httpposts = data;
      console.log(this.httpposts);
    })
  }
}
