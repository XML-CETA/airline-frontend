export interface FilteredFlightDto {
    id: string
    startingPoint: string;
    destination: string;
    price: number;
    dateTime: Date;
    neededSeats: number;
    totalPrice: number;
}