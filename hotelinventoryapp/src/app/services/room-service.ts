import { Injectable } from '@angular/core';
import { Room } from '../model/room.type';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  RoomList: Room[] = [
    { roomNumber: '101', rating: 4.5, amenities: ['Wi-Fi', 'TV', 'Mini Bar'], price: 150 },
    { roomNumber: '102', rating: 4.0, amenities: ['Wi-Fi', 'TV'], price: 120 },
    { roomNumber: '103', rating: 4.8, amenities: ['Wi-Fi', 'TV', 'Mini Bar', 'Safe'], price: 200 },
  ];
  
  
}
