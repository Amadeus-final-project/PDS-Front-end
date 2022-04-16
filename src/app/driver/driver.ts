export class Driver {
}


export interface DriverModel{
    lastCheckedIn:string;
    vehicle:string;
    firstName:string;
    driverStatus:string;
}

export interface WorkingAdressModel {
    country:string;
    city:string;
    postCode:string;
    region:string;
}