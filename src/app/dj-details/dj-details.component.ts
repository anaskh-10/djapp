import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dj-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dj-details.component.html',
  styleUrl: './dj-details.component.css'
})
export class DjDetailsComponent {
  dj: any;
  djs = [
    { 
      id: 1, 
      name: 'DJ Groove', 
      photoUrl: 'dj1.jpg', 
      description: 'House and techno master', 
      rating: 7.5,
      bio: 'DJ Groove has been spinning tracks for over 10 years, mixing house and techno beats with a unique flair.',
      musicStyles: ['House', 'Techno'],  // New field
      mediaItems: ['track1.mp3', 'track2.mp3'], // New field
      price:250 
    },
    { 
      id: 2, 
      name: 'DJ Beat', 
      photoUrl: 'dj2.jpg', 
      description: 'Hip-hop and R&B specialist', 
      rating: 8.5,
      bio: 'DJ Beat is known for bringing the best of hip-hop and R&B to the dance floor, with a style that gets the crowd moving.',
      musicStyles: ['Hip-hop', 'R&B'], 
      mediaItems: ['track1.mp3', 'track2.mp4'],
      price:250 
    },
    { 
      id: 3, 
      name: 'DJ Alex', 
      photoUrl: 'dj3.jpg', 
      description: 'Afro and techno master', 
      rating: 6.5,
      bio: 'DJ Alex merges the vibrant beats of Afro music with the energy of techno, creating a unique sound.',
      musicStyles: ['Afro', 'Techno'], 
      mediaItems: ['track1.mp3'],
      price:250
    },
    { 
      id: 4, 
      name: 'DJ Ahmed', 
      photoUrl: 'dj4.jpg', 
      description: 'Hip-hop specialist', 
      rating: 9.5,
      bio: 'A master of hip-hop beats, DJ Ahmed brings a high-energy show wherever he performs.',
      musicStyles: ['Hip-hop'], 
      mediaItems: ['track1.mp3'],
      price:250
    },
    { 
      id: 5, 
      name: 'DJ Khaled', 
      photoUrl: 'dj4.jpg', 
      description: 'Hip-hop specialist', 
      rating: 9.5,
      bio: 'DJ Khaled is renowned for his collaborations with artists and his ability to create a hype wherever he goes.',
      musicStyles: ['Hip-hop'], 
      mediaItems: ['track1.mp3', 'video1.mp4'],
      price:250 
    },
    { 
      id: 6, 
      name: 'DJ James', 
      photoUrl: 'dj4.jpg', 
      description: 'Hip-hop specialist', 
      rating: 9.5,
      bio: 'DJ James mixes contemporary hip-hop with throwback beats, creating an unforgettable vibe.',
      musicStyles: ['Hip-hop'], 
      mediaItems: ['track1.mp3'],
      price:250
    }  
  ];
  constructor(private route: ActivatedRoute,private router:Router) {
    const djId = +this.route.snapshot.paramMap.get('id')!;
    this.dj = this.djs.find((dj) => dj.id == djId);
  }

  bookDj(djId: number) {
    // Find the DJ by id and store the booking
    const booking = this.djs.find(dj => dj.id === djId);
    if (booking) {
      // Redirect to the booking page and pass the DJ details
      this.router.navigate(['/bookings'], { queryParams: { djId: djId, price: booking.price } });
    }
  }
}
