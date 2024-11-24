import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title='home'
  djs = [
    { id: 1, name: 'DJ Groove', photoUrl: 'dj1.jpg', description: 'House and techno master',rating:7.5},
    { id: 2, name: 'DJ Beat', photoUrl: 'dj2.jpg', description: 'Hip-hop and R&B specialist',rating:8.5 },
    { id: 3, name: 'DJ Alex', photoUrl: 'dj3.jpg', description: 'afro and techno master',rating:6.5 },
    { id: 4, name: 'DJ Ahmed', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 5, name: 'DJ Khaled', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 6, name: 'DJ James', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 7, name: 'DJ Mounir', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
    { id: 8, name: 'DJ chaker', photoUrl: 'dj4.jpg', description: 'Hip-hop  specialist' ,rating:9.5},
  ];
  constructor(private router:Router){}
  viewDjProfile(djId:number){
    this.router.navigate(['/dj',djId]);
  }
}
