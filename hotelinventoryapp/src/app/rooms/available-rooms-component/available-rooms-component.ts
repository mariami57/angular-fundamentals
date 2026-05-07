import { Component, input, output } from '@angular/core';
import { Room } from '../../model/room.type';

@Component({
  selector: 'app-available-rooms-component',
  imports: [],
  templateUrl: './available-rooms-component.html',
  styleUrl: './available-rooms-component.css',
})
export class AvailableRoomsComponent {
  availableRooms = input.required<Room[]>();
  
}

