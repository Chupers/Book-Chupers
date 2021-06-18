import { Timestamp } from "rxjs";
import { Accommodation } from "./Accommodation";

export class RentalRecord{
    rentalRecordId! : number;
    checkInDate! : Timestamp<Date>;
    checkOutDate! : Timestamp<Date>;
    recordStatus! : string;
    accommodation!: Accommodation
    accommodationName!:string;
}