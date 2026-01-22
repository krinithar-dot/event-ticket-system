import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../booking';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) {
    this.bookings = this.bookingService.getBookings();
  }
}
