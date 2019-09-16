
export class User {

    name : string;
    id: number;
    email: string;
    phone: number;
    Status : string;
 
    constructor(name: string, id: number, email: string, phone: number, status:string) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.Status = status;
    }
}