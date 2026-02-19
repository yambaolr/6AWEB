import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  imports: [ FormsModule ],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})

export class TemplateDemo {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  genderOptions: string[] = ['Male', 'Female'];
  selectedGender = '';
  status = '';
  notes = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
