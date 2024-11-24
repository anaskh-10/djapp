import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dj-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './dj-signup.component.html',
  styleUrl: './dj-signup.component.css'
})
export class DjSignupComponent {
  djData={
    name: '',
    email: '',
    password: '',
    genre: '',
    bio: '',
    musicStyles: [], // This will be an array of selected music styles
    mediaItems: [] // This will be an array of files selected for upload
  };

  onSubmit() {
    if (this.djData.musicStyles.length === 0) {
      alert('Please select at least one music style.');
      return;
    }
    // Check if files are selected
    if (this.djData.mediaItems.length === 0) {
      alert('Please upload at least one media item.');
      return;
    }


    // Handle DJ sign-up logic (e.g., send data to backend)
    console.log('DJ Sign Up Data:', this.djData);
   
  }
}
