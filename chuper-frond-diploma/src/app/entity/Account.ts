import { Feedback } from "./FeedBack";
import { RentalRecord } from "./RentalRecord";
import { UserFacade } from "./UserFasade";

export class Account{
    accountId! : number;
    host! : boolean;
    rentalRecordList!: RentalRecord[];
    feedbackList!: Feedback[];
    userFacade!:UserFacade;

}