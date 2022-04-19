export class Driver {
    lastCheckedIn:any;
    vehicle:any;
    firstName!:string;
    driverStatus!:any;
}


export interface DriverModel{
    lastCheckedIn:string;
    vehicle:string;
    firstName:string;
    driverStatus:string;
}

export interface GetDriverModel{
    lastCheckedIn:any;
    vehicle:any;
    firstName:string;
}

export interface WorkingAdressModel {
    country:string;
    city:string;
    postCode:string;
    region:string;
}

export interface VehicleModel {
    id:number;
    isAvailable:boolean;
    capacity:number;
    range: Object;
    brand: Object;
    year: number;
    fuelType: string;

}

export interface VacationModel {
    startDate:Date;
    endDate:Date;
    description:string;
    vacationType:string;

}