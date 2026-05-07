export type Room = {
    amenities?: string[];
    price?: number;
    rating?: number;   
    roomNumber: string;
    photo?: string;
    available: boolean;
}

export type RoomsInfo = {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;

}