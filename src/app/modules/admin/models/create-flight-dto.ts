export interface CreateFlightDto {
    startingPoint: string;
    destination: string;
    price: number;
    allSeats: number;
    dateTime: Date;
}
