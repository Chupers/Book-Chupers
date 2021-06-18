import { AccommodationService } from "../shared/accommodation.service";
import { Feedback, Review } from "./FeedBack";

export class Accommodation{
    accommodationId!:number
    accommodationInfo!:AccommodationInfo
    accommodationCharacteristicList!: AccommodationCharacteriscic[]
    feedbackList!:Feedback[]
    favorite!:boolean;
    review!:Review;
    countReview!: string;
    rating!:string
}

export class AccommodationInfo{
    accommodationInfoId!: number;
    country : string = ""
    name! : string
    city : string = ""
    address : string = ""
    photo : string[] =[]
    longitude : string = ""
    latitude : string = ""
    guestCount : number = 0
    roomCount : number = 0
    bedCount : number = 0
    description: string = ""
    accommodationType:string = ""
    pricePerDay:number = 0
}

export class AccommodationCharacteriscic{
    iconName!: string
    characteristicText!: string

    constructor(iconName:string,text:string){
        this.characteristicText = text
        this.iconName = iconName
    }
}
