import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-djs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './djs.component.html',
  styleUrl: './djs.component.css'
})
export class DjsComponent {
  title='Djs';
  djs = [
    { id: 1, name: 'DJ Groove', photoUrl: 'dj1.jpg', description: 'House and techno master',rating:7.5},
    { id: 2, name: 'DJ Beat', photoUrl: 'dj2.jpg', description: 'Hip-hop and R&B specialist',rating:8.5 },
    { id: 3, name: 'DJ Alex', photoUrl: 'dj3.jpg', description: 'afro and techno master',rating:6.5 },
    { id: 4, name: 'DJ Ahmed', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 5, name: 'DJ Khaled', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 6, name: 'DJ James', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 7, name: 'DJ Mounir', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 8, name: 'DJ chaker', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 8, name: 'DJ chaker', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 8, name: 'DJ chaker', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 8, name: 'DJ chaker', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
  ];
  constructor(private router: Router) {}
  viewDjPage(djId: number) {
    this.router.navigate(['/dj', djId]); // Navigate to DJ details page
  }

  bookDj(djId: number) {
    this.router.navigate(['/booking', djId]); // Navigate to booking page
  }
}
