import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  title = "Black cats"
  descriptions = "The hardest thing of all is to find a black cat in a dark room, especially if there is no cat. - Confucius"

  imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkXF_3zILNxaHgTEMGTrQJwkbhw3E1RTQ-w&s'
  w = 150
  h = 150
  altText = 'Black cat in the dark'

  textColor = 'orange'
  isHighlighted = true;

  yourName = '';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
