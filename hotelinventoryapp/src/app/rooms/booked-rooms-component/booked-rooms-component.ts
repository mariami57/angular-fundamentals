import { Component, inject, input } from '@angular/core';
import { Room } from '../../model/room.type';
import { CurrencyPipe } from '@angular/common';
import { RoomService } from '../../services/room-service';

@Component({
  selector: 'app-booked-rooms-component',
  imports: [CurrencyPipe],
  templateUrl: './booked-rooms-component.html',
  styleUrl: './booked-rooms-component.css',
})
export class BookedRoomsComponent {
  roomService = inject(RoomService);
}
