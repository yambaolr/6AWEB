import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-component',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  name: string = 'Name...';
  email: string = 'Email...';
  message: string = 'Message...';

}
