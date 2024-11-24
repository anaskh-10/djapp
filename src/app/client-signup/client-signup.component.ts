import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './client-signup.component.html',
  styleUrl: './client-signup.component.css'
})
export class ClientSignupComponent {
  clientData = {
    name:'',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    // Handle sign-up logic (e.g., send data to backend)
    console.log('Client Sign Up Data:', this.clientData);
  }
}
