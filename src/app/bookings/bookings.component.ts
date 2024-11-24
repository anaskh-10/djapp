import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  title='Bookings';
  bookingDetails: any;
  djName!: string;
  price!: number;

  constructor(private route: ActivatedRoute,private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const djId = params['djId'];
      this.price = +params['price'];  // Convert price to a number

      // Sample DJ data (this could come from a service or backend)
      const djs = [
        { id: 1, name: 'DJ Groove', price: 200 },
        { id: 2, name: 'DJ Beat', price: 250 },
        { id: 3, name: 'DJ Alex', price: 300 }
      ];
      // Find DJ by ID
      const dj = djs.find(dj => dj.id === djId);
      this.djName = dj ? dj.name : 'Unknown DJ';

      // Prepare booking details
      this.bookingDetails = {
        djName: this.djName,
        price: this.price
      };
    });
  }
  confirmBooking() {
    // You can add logic to confirm the booking, e.g., save to the backend
    alert(`Booking confirmed for ${this.bookingDetails.djName} at $${this.bookingDetails.price}`);
    
    // Redirect to a confirmation page or a different view if necessary
    this.router.navigate(['/confirmation']);
  }

}
