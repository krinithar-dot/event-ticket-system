import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: any[] = [];

  addBooking(eventName: string, tickets: number) {
    this.bookings.push({
      eventName,
      tickets
    });
  }

  getBookings() {
    return this.bookings;
  }
}
