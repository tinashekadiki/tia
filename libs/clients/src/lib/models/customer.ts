export interface Customer {
    id:               number;
    createdBy:        null;
    lastModifiedBy:   null;
    dateCreated:      Date;
    lastModifiedDate: Date;
    version:          number;
    deleted:          boolean;
    active:           null;
    username:         string;
    channel:          string;
    personalDetails:  PersonalDetails;
    contactDetails:   ContactDetails;
}

export interface ContactDetails {
    address:     Address;
    email:       string;
    phoneNumber: string;
}

export interface Address {
    city:         string;
    country:      string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
}

export interface PersonalDetails {
    firstName:      string;
    middleNames:    string;
    lastName:       string;
    dateOfBirth:    Date;
    age:            number;
    identification: Identification;
}

export interface Identification {
    identificationType: string;
    value:              string;
}
