export interface SearchFlightDto {
    startingPoint: string;
    destination: string;
    neededSeats: number;
    dateTime: Date;
}