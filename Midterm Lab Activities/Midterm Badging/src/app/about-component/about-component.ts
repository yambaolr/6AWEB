import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
   presentDate = new Date();
}
