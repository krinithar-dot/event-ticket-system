import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../booking';


@Component({
  selector: 'app-event-list',
  imports: [CommonModule],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css']
})
export class EventList {
  constructor(private bookingService: BookingService) {}

  events = [
  {
    id: 1,
    name: 'Music Concert',
    date: '2026-02-15',
    venue: 'City Hall',
    price: 500,
    availableTickets: 50
  },
  {
    id: 2,
    name: 'Tech Conference',
    date: '2026-03-10',
    venue: 'Convention Center',
    price: 1200,
    availableTickets: 30
  },
  {
    id: 3,
    name: 'Art Exhibition',
    date: '2026-04-05',
    venue: 'Art Gallery',
    price: 300,
    availableTickets: 100
  }
];
bookTicket(event: any, ticketCount: number) {
  if (ticketCount <= 0) {
    alert('Please enter a valid number of tickets');
    return;
  }

  if (ticketCount > event.availableTickets) {
    alert('Not enough tickets available');
    return;
  }

  event.availableTickets -= ticketCount;

  this.bookingService.addBooking(event.name, ticketCount);

  alert(`Booking successful! ${ticketCount} ticket(s) booked for ${event.name}`);
}



}
