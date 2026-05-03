export type Room = {
    amenities?: string[];
    price?: number;
    rating?: number;   
    roomNumber: string;
    photo?: string;
}

export type RoomsInfo = {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;

}