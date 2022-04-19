export interface Transaction {
    id:number;
    paymentType:string;
    payer: any;
    price: number;
    paidAt: Date;
}