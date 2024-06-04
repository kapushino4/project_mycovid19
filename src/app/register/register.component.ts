import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

export interface CovidData {
  totalCases: number;
  totalDeaths: number;
  totalRecovered: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private location: Location) { } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(10)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    console.log('Register component initialized');
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    this.markFormGroupTouched(this.registerForm);
    
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    
      const existingEmails = localStorage.getItem('emails');
      const existingPasswords = localStorage.getItem('passwords');
      
      const emailsArray = existingEmails ? existingEmails.split(',') : [];
      const passwordsArray = existingPasswords ? existingPasswords.split(',') : [];
      
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      
      if (!emailsArray.includes(email)) {
        emailsArray.push(email);
        localStorage.setItem('emails', emailsArray.join(','));
      }
      if (!passwordsArray.includes(password)) {
        passwordsArray.push(password);
        localStorage.setItem('passwords', passwordsArray.join(','));
      }
      
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid!');
    }
  }
  
  
  

  onCancel() {
    this.registerForm.reset();
  }

  onBack() {
    this.location.back(); 
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}