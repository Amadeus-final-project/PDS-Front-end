export interface IUser {
    email: string;
    password: string;

}

export interface RegisterUser {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    email: string;
}
export interface EditUser{
  phoneNumber:string;
  firstName: string;
  lastName:string;
  email:string;
}
