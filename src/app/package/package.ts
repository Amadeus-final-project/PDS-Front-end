export class Package {
}

export interface PackageModel {
    id:number;
    recipient:string;
    deliveryOffice:string;
    currentLocation:string;
    deliveryType:number;
    isSigned:boolean;
    isFragile:boolean;
    weight: number;
    height: number;
    width: number;
    length: number;
    description:string;
}

export interface PackageReceiveModel {
    id:number;
    recipient:any;
    deliveryOffice:any;
    currentLocation:any;
    deliveryType:any;
    isSigned:boolean;
    isFragile:boolean;
    weight: number;
    trackingNumber:string;
    description:string;
}