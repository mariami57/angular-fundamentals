import { Injectable, signal } from '@angular/core';
import { Room } from '../model/room.type';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  RoomList = signal <Room[]>([
    { roomNumber: '101', rating: 4.5, amenities: ['Wi-Fi', 'TV', 'Mini Bar'], price: 150, photo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400', available: true },
    { roomNumber: '102', rating: 4.0, amenities: ['Wi-Fi', 'TV'], price: 120, photo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400', available: false },
    { roomNumber: '103', rating: 4.8, amenities: ['Wi-Fi', 'TV', 'Mini Bar', 'Safe'], price: 200, photo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400', available: true},
    { roomNumber: '104', rating: 3.5, amenities: ['Wi-Fi'], price: 100, photo: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400', available: false },
  ]);

  
  
  
}
