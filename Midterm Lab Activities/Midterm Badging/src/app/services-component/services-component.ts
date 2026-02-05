import { DataService } from './../data-service';
import { Component } from '@angular/core';
import { Post } from '../post.model';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-services-component',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent {
  httpposts : Post[] = [];
  search: string = '';
  filter: any[] = [];


  constructor(private httpClient: DataService){}

  ngOnInit(){
    this.httpClient.getPostsRemotely().subscribe((data) =>{
      this.httpposts = data;
    })
    this.filter = [...this.httpposts]
  }

  filterPosts(){
    const text = this.search.toLowerCase().trim();

    this.filter = this.httpposts.filter(post =>
      post.title.includes(text) || post.body.includes(text)
    );
  }
}
