export interface ShowFlightDto {
    id: string
    startingPoint: string;
    destination: string;
    price: number;
    allSeats: number;
    dateTime: Date;
    remainingSeats: number;
}
