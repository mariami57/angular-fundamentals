import { Component, inject, input, output } from '@angular/core';
import { Room } from '../../model/room.type';
import { CurrencyPipe } from '@angular/common';
import { RoomService } from '../../services/room-service';

@Component({
  selector: 'app-available-rooms-component',
  imports: [CurrencyPipe],
  templateUrl: './available-rooms-component.html',
  styleUrl: './available-rooms-component.css',
})
export class AvailableRoomsComponent {
  roomService = inject(RoomService);

  bookRoom() {
    alert('Room booked successfully!');
  }
  
}

