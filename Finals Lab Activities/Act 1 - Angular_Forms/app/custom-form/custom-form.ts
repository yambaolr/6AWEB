import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  role = ['Backend Developer', 'Frontend Developer', 'Intern'];
  mode = ['WFH', 'WFO', 'Hybrid'];
  form!: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]{2,50}$/)]],
      lname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]{2,50}$/)]],
      minit: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{1,3}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      gender: ['', Validators.required],
      role: ['Intern', Validators.required],
      mode: ['WFO', Validators.required],
      });
  }

  onSubmit() {
    if(this.form.invalid){
      this.form.markAllAsTouched();
    } else {
      alert(JSON.stringify(this.form.value));
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }

}
