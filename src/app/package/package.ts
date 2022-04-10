export class Package {
}

export interface PackageModel {
    recipient:string;
    deliveryOffice:string;
    deliveryToOffice:string;
    deliveryType:number;
    isSigned:boolean;
    isFragile:boolean;
    weight: number;
    height: number;
    width: number;
    length: number;
    description:string;
}
