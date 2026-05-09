import { Component, inject, OnInit } from '@angular/core';
import { Room } from '../../model/room.type';
import { RoomService } from '../../services/room-service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-rooms-component',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './rooms-component.html',
  styleUrl: './rooms-component.css',
})
export class RoomsComponent implements OnInit {

  selectedView: string ='';
  hotelName:string = 'Hilton Hotel';
  numberOfRooms:number = 0;
  hideRooms = false;

  room: Room = {
    roomNumber: '101',
    available: false,
  }

  roomService = inject(RoomService);

  

  ngOnInit(): void {
    this.numberOfRooms = 10;


  }

  bookRoom() {
    alert('Room booked successfully!');
  }

  message: string = '';

  
  
}

