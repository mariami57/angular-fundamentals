import { Component, inject, OnInit, signal } from '@angular/core';
import { Room } from '../../model/room.type';
import { RoomService } from '../../services/room-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-component',
  imports: [FormsModule],
  templateUrl: './rooms-component.html',
  styleUrl: './rooms-component.css',
})
export class RoomsComponent implements OnInit {
  hotelName:string = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  room: Room = {
    roomNumber: '101',
  }

  roomService = inject(RoomService);
  roomList= signal<Room[]> ([]);
  

  ngOnInit(): void {
    this.roomList.set(this.roomService.RoomList);
  }

  bookRoom() {
    alert('Room booked successfully!');
  }

  message: string = '';
  
}
