import { Component, input } from '@angular/core';
import { Room } from '../../model/room.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-booked-rooms-component',
  imports: [CurrencyPipe],
  templateUrl: './booked-rooms-component.html',
  styleUrl: './booked-rooms-component.css',
})
export class BookedRoomsComponent {
  bookedRooms = input.required<Room[]>();
}
