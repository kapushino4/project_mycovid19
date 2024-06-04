import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  title = 'register';
  first: string = '';
  last: string = '';
  age: string = '';
  gender: string = '';
  email: string = '';
  phone: string = '';
  pass: string = '';
  confirm_pass: string = '';
  errormessage: string = ''; // Added the errormessage property
  errorFields: string[] = [];
  submitted: boolean = false; // Added the submitted property

  numberOnly(event: any, type: string) {
    const value = event.target.value;

    // Allow Backspace, Delete, Tab, and Arrow keys
    if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    // Prevent non-numeric input
    if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key)) {
      event.preventDefault();
    }

    // Check length for age and phone fields
    if (type === 'age' && value.length >= 3) {
      event.preventDefault();
    }
    if (type === 'phone' && value.length >= 10) {
      event.preventDefault();
    }
  }

  adduser() {
    this.submitted = true;
    this.errorFields = [];

    // Validate form fields
    if (this.pass === '' || this.confirm_pass === '' || this.email === '' || this.phone === '' || this.age === '' || this.last === '' || this.first === '' || this.gender === '') {
      if (this.pass === '') this.errorFields.push('Password');
      if (this.confirm_pass === '') this.errorFields.push('Confirm Password');
      if (this.email === '') this.errorFields.push('Email');
      if (this.phone === '' || this.phone.length !== 10) this.errorFields.push('Phone');
      if (this.age === '') this.errorFields.push('Age');
      if (this.last === '') this.errorFields.push('Lastname');
      if (this.first === '') this.errorFields.push('Firstname');
      if (this.gender === '') this.errorFields.push('Gender');
    }

    if (this.errorFields.length > 0) {
      this.errorFields.forEach(field => {
        const inputField = document.getElementById(field.toLowerCase()) as HTMLInputElement;
        if (inputField) {
          inputField.classList.add('error-border');
        }
      });
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      alert('Invalid email format');
      return;
    }

    // Validate password match
    if (this.pass !== this.confirm_pass) {
      alert('Passwords do not match');
      this.pass = '';
      this.confirm_pass = '';
      const passInput = document.getElementById('password') as HTMLInputElement;
      if (passInput) {
        passInput.focus();
      }
      return;
    }

    // Validate password length
    if (this.pass.length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }

    console.log('Firstname : ', this.first);
    console.log('Lastname : ', this.last);
    console.log('Age : ', this.age);
    console.log('Gender : ', this.gender);
    console.log('Email : ', this.email);
    console.log('Phone : ', this.phone);
    console.log('Pass : ', this.pass);
    console.log('Confirm pass : ', this.confirm_pass);

    this.router.navigate(['/home'], {
      state: {
        first: this.first,
        last: this.last,
        age: this.age,
        gender: this.gender,
        email: this.email,
        phone: this.phone
      }
    });
  }

  clearForm() {
    this.first = '';
    this.last = '';
    this.age = '';
    this.gender = '';
    this.email = '';
    this.phone = '';
    this.pass = '';
    this.confirm_pass = '';
    this.errorFields = [];
    this.submitted = false;
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
