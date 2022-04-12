export class Admin {
}

export interface AddVehicleModel {

    capacity:number;
    range: string;
    brand :string;
    year: number;
    fuelType:string;
}
export interface AddAgentModel {
  "email": "string";
  "firstName": "string";
  "lastName": "string";
  "password": "string";
  "phoneNumber": "string";
  "remainingPaidLeave": number;
}
export interface AddDriverModel {
  "email": "string";
  "firstName": "string";
  "lastName": "string";
  "password": "string";
  "phoneNumber": "string";
  "remainingPaidLeave": number;
}
export interface AddOfficeModel {
  "city": "string";
  "country": "string";
  "name": "string";
  "postcode": "string";
  "region": "string";
  "street": "string";
}


