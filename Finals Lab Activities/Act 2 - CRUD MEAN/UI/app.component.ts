import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";


  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];
  selectedBookId: any = null;

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }

  ngOnInit(){
    this.refreshBooks();
  }

  addBook(){
    var newBook=(<HTMLInputElement>document.getElementById("newBook")).value;
    var newAuthor=(<HTMLInputElement>document.getElementById("newAuthor")).value;
    var newDesc=(<HTMLInputElement>document.getElementById("newDesc")).value;
    var newGenre=(<HTMLInputElement>document.getElementById("newGenre")).value;
    var newPrice=(<HTMLInputElement>document.getElementById("newPrice")).value;
    var formData=new FormData();
    formData.append("title", newBook);
    formData.append("author", newAuthor);
    formData.append("description", newDesc);
    formData.append("genre", newGenre);
    formData.append("price", newPrice.toString());
    this.http.post(this.APIUrl+'AddBook', formData).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }

  deleteBook(id:any){
    this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }

  updateForm(id: any) {
    this.selectedBookId = this.selectedBookId === id ? null : id;
  }

  updateBook(id:any){
      var updatedBook=(<HTMLInputElement>document.getElementById("updatedBook")).value;
      var updatedAuthor=(<HTMLInputElement>document.getElementById("updatedAuthor")).value;
      var updatedDesc=(<HTMLInputElement>document.getElementById("updatedDesc")).value;
      var updatedGenre=(<HTMLInputElement>document.getElementById("updatedGenre")).value;
      var updatedPrice=(<HTMLInputElement>document.getElementById("updatedPrice")).value;
        const updateData = {
          title: updatedBook,
          author: updatedAuthor,
          description: updatedDesc,
          genre: updatedGenre,
          price: Number(updatedPrice)
        };

      this.http.patch(this.APIUrl + 'UpdateBook?id=' + id, updateData)
        .subscribe(data => {
          alert(data);
          this.refreshBooks();
          this.selectedBookId = null;
        });
      
  }


}
