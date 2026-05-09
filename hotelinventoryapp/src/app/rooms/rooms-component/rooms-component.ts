import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Room } from '../../model/room.type';
import { RoomService } from '../../services/room-service';
import { FormsModule } from '@angular/forms';
import { AvailableRoomsComponent } from '../available-rooms-component/available-rooms-component';
import { BookedRoomsComponent } from '../booked-rooms-component/booked-rooms-component';
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

