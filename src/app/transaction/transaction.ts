export interface Transaction {
    id:number;
    paymentType:string;
    payer: Object;
    price: number;
    paidAt: Date;
}