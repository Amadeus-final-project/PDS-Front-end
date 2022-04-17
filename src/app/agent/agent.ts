export class Agent {
}

export interface VacationModel{
    startDate: Date;
    endDate:Date;
    description:string;
    isApproved:boolean;
}

export interface VacationRequestModel {
    startDate:Date;
    endDate:Date;
    description:string;
    vacationType:string;

}