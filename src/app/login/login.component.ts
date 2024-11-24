import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginData={
    email: '',
    password: ''
  };

  constructor(private router: Router) {}
  

  // Method for navigating to Client Sign-Up page
  signUpAsClient() {
    this.router.navigate(['/client-signup']);
  }

  // Method for navigating to DJ Sign-Up page
  signUpAsDJ() {
    this.router.navigate(['/dj-signup']);
  }

  // Add other login methods if needed
  onSubmit() {
    // Handle login logic here
    this.router.navigate(['/']);
    console.log('Logging in with:', this.loginData.email, this.loginData.password);
  }
}

