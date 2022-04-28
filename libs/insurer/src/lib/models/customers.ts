
export class Customer {
    id: number;
    position: number;
    dateOfLastOrder: string;
    username: string;
    email: string;
    phoneNumber: string;
    packageName: string;
    packageCode: string;
    insuranceType: string;
    numberOfOrders: number;  
    address:string;
    personalDetails: PersonalDetails
    contactDetails: ContactDetails
}

export class PersonalDetails {
    age: number;
    dateOfBirth: string;
    firstName: string;
    identification: Identification;
    lastName: string;
    middleNames: string;
}

export class Identification {
    identificationType: string;
    value: string;
}
export class ContactDetails {
address: Address;
email: string;
phoneNumber: string;
}

export class Address {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    country: string;
}